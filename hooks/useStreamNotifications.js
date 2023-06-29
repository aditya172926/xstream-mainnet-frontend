import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { bridgeDataConfig } from "@/data/config";

const Web3 = require("web3");
const abiDecoder = require("abi-decoder");

const web3 = new Web3(
  "wss://polygon-mumbai.g.alchemy.com/v2/qac25z9Oep-F5rDu38yVfQHf5LjdJoGL"
);

const destinationAbi = require("../data/destinationAbi.json");


export const useStreamNotifications = () => {
  const [streamNotifications, setStreamNotifications] = useState([]);

  useEffect(() => {
    const run = async () => {
      if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const network = await provider.getNetwork();
        if(!bridgeDataConfig[network.chainId]) {
          toast("Unsupported Network")
        }
        const destinationAddress = bridgeDataConfig[network.chainId].xstreamContractAddress;
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
            setStreamNotifications((prev) => [...prev, notificationPayload]);
  
            // before: was using contractAddress as the channel id
            // after: channel id is hardcoded now
          })
          .on("changed", function (log) {
            console.log("Changed");
          });
          const cleanUp = () => destinationEvents.unsubscribe(function(error, success){
            if(success)
                console.log('Successfully unsubscribed!');
        });
      }
      
    };
    run()
  }, []);

  return {streamNotifications};
}