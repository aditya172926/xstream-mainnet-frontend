import Head from "next/head";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

// Component IMPORTS
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import RightPannel from "./components/RightPannel";

// GLOBAL VALUES
const Web3 = require("web3");
const abiDecoder = require("abi-decoder");
const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/qac25z9Oep-F5rDu38yVfQHf5LjdJoGL"
);
const destinationAbi = require("../data/destinationAbi.json");
const destinationAddress = ["0xA73Bf7955fAae6Da0561F25bEA45F3d2D2119997"];

export default function Home() {
  // WALLET IMPORTS
  const { chains, provider } = configureChains(
    [polygonMumbai, goerli],
    [publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  const sideBarConst = {
    dashboard: false,
    sendStream: false,
    notification: false,
    xStream: false,
    stream: false,
  };
  // USESTATE
  const [sideBar, setSideBar] = useState({
    dashboard: false,
    sendStream: false,
    notification: false,
    xStream: false,
    stream: false,
    streamNotifications: [],
  });

  const run = async () => {
    abiDecoder.addABI(destinationAbi);
    const options = { address: destinationAddress };
    var destinationEvents = web3.eth
      .subscribe("logs", options, function (error, result) {
        if (!error) console.log("Got result");
        else console.log(error);
      })
      .on("data", async function (log) {
        const decodedLogs = abiDecoder.decodeLogs([log]);
        let eventName = decodedLogs[0]?.name;
        let destinationAddress = decodedLogs[0]?.address;
        let destinationLogs = decodedLogs[0].events;
        const eventNotification = {
          eventName: eventName,
          contractAddress: destinationAddress,
          events: destinationLogs,
        };

        console.log("Decoded Logs ", eventNotification);
        let notificationPayload = {};
        if (eventName == "StreamStart") {
          // show a start stream event
          notificationPayload = {
            status: "initialise",
            txnHash: "",
            receipient: eventNotification?.events[1]?.value,
            flowRate: eventNotification?.events[2]?.value,
            amount: eventNotification?.events[3]?.value,
          };
          console.log("Cookie data ", notificationPayload);
        } else if (eventName == "StreamUpdate") {
          notificationPayload = {
            status: "Updated",
            txnHash: "",
            receipient: eventNotification?.events[1]?.value,
            flowRate: eventNotification?.events[2]?.value,
            amount: eventNotification?.events[3]?.value,
          };
          // show a update stream event
        } else {
          notificationPayload = {
            status: "Closed",
            txnHash: "",
            receipient: eventNotification?.events[1]?.value,
            flowRate: eventNotification?.events[2]?.value,
            amount: eventNotification?.events[3]?.value,
          };
          // show a delete stream event
        }
        setStreamNotifications([notificationPayload, ...streamNotifications]);

        // before: was using contractAddress as the channel id
        // after: channel id is hardcoded now
      })
      .on("changed", function (log) {
        console.log("Changed");
      });
  };

  useEffect(() => {
    run();
  }, []);

  // LOADS DASHBOARD
  useEffect(() => {
    setSideBar({
      ...sideBarConst,
      dashboard: true,
    });
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#10bb35",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <Head>
          <title>XStream</title>
          <meta
            name="description"
            content="Cross chain streaming using AutoPay XStream"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main font-poppins">
          <Navbar />
          <div className="flex  min-h-screen">
            <SideBar
              setSideBar={setSideBar}
              sideBar={sideBar}
              sideBarConst={sideBarConst}
            />
            <RightPannel sideBar={sideBar} />
          </div>
        </main>
        <ToastContainer
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// COMMENTED CODE
{
  /* <div className="w-full bg-[#F4F4F4]">
                <div className="inside-main-right">
                  {showDashboard ? (
                    <Dashboard />
                  ) : showSendStream ? (
                    <SendStream />
                  ) : showXStream ? (
                    <SendXStream />
                  ) : showNotification ? (
                    <Notifications notifications={streamNotifications} />
                  ) : null}
                </div>
              </div> */
}

{
  /* <SideBar
setDashboard={setDashboard}
setSendStream={setSendStream}
setShowNotification={setShowNotification}
setShowXStream={setShowXStream}
showXStream={showXStream}
showDashboard={showDashboard}
showSendStream={showSendStream}
showNotification={showNotification}
setShowStream={setShowStream}
showStream={showStream}
/> */
}

//   const [streamNotifications, setStreamNotifications] = useState([]);
// const [showDashboard, setDashboard] = useState(false);
// const [showSendStream, setSendStream] = useState(false);
// const [showNotification, setShowNotification] = useState(false);
// const [showXStream, setShowXStream] = useState(false);
// const [showStream, setShowStream] = useState(false);
