import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { createClient } from "urql";

import { sign } from "crypto";
import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import ChainSelect from "./ChainSelect";

import Table  from "./Table";
import DashboardHeader from "./DashboardHeader";
import ConnectWalletSection from "./ConnectWalletSection";

function Dashboard() {

  const { address, isConnected } = useAccount();
  const [chain, setChain] = useState("goerli");
  const [dropDown, setDropDown] = useState(true);
  const [dropDownAll, setDropDownAll] = useState(true);
  const [dropDownIncoming, setDropDownIncoming] = useState(true);
  const [dropDownOutgoing, setDropDownOutgoing] = useState(true);
  const [allData, setAllData] = useState([]);
  const [incomingData, setIncomingData] = useState([]);
  const [outgoingData, setOutgoingData] = useState([]);
  const [total, setTotal] = useState([]);
  const [balance, setBalane] = useState();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const loadData = async () => {
    if (!address) {
      console.log("false");
      return;
    }

    // const APIURL = `https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai`;
    const APIURL = `https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-${chain}`;

    const tokensQuery_outgoing = `
    query {
    flowUpdatedEvents(
      where: {sender: "${address}"}
      orderBy: timestamp
    ) {
      timestamp
      sender
      receiver
      flowRate
      totalAmountStreamedUntilTimestamp
      flowOperator
      token
    }
    }
  `;

    const tokensQuery_incoming = `
    query {
    flowUpdatedEvents(
      where: {receiver: "${address}"}
      orderBy: timestamp
    ) {
      timestamp
      sender
      receiver
      flowRate
      totalAmountStreamedUntilTimestamp
      flowOperator
      token
    }
    }
  `;

    const client = createClient({
      url: APIURL,
    });
    const loadedData_outgoing = await client
      .query(tokensQuery_outgoing)
      .toPromise();

    const loadedData_incoming = await client
      .query(tokensQuery_incoming)
      .toPromise();

    const data = loadedData_outgoing.data.flowUpdatedEvents;
    const data1 = loadedData_incoming.data.flowUpdatedEvents;

    total.push([data.length + data1.length, data.length, data1.length]);
    setTotal(total);

    console.log("** DEBUG", loadedData_outgoing);
    console.log("** DEBUG", loadedData_incoming);

    data.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
    data1.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
    // Array.prototype.push.apply(data2, data1);
    // data2.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
    // console.log(data2);

    for (let i = 0; i < data.length; i++) {
      if (!outgoingData.find((item) => loadedData_outgoing[0] === item[0])) {
        const d = new Date(parseInt(data[i].timestamp) * 1000);
        const date =
          String(d.getDate()) +
          " " +
          String(monthNames[d.getMonth()]) +
          ". " +
          String(d.getFullYear());
        outgoingData.push([
          data[i].sender,
          data[i].receiver,
          data[i].flowOperator,
          ethers.utils.formatEther(data[i].totalAmountStreamedUntilTimestamp),
          date,
        ]);
        allData.push([
          data[i].receiver,
          data[i].flowOperator,
          ethers.utils.formatEther(data[i].totalAmountStreamedUntilTimestamp),
          date,
          true,
          data[i].timestamp,
        ]);
      }
    }

    for (let i = 0; i < data1.length; i++) {
      if (!incomingData.find((item) => loadedData_incoming[0] === item[0])) {
        const d = new Date(parseInt(data1[i].timestamp) * 1000);
        const date =
          String(d.getDate()) +
          " " +
          String(monthNames[d.getMonth()]) +
          ". " +
          String(d.getFullYear());
        incomingData.push([
          data1[i].sender,
          data1[i].receiver,
          data1[i].flowOperator,
          ethers.utils.formatEther(data1[i].totalAmountStreamedUntilTimestamp),
          date,
        ]);
        allData.push([
          data1[i].sender,
          data1[i].flowOperator,
          ethers.utils.formatEther(data1[i].totalAmountStreamedUntilTimestamp),
          date,
          false,
          data1[i].timestamp,
        ]);
      }
    }
    allData.sort((a, b) => parseInt(b[5]) - parseInt(a[5]));

    setOutgoingData(outgoingData);
    setIncomingData(incomingData);
    setAllData(allData);

    // console.log(outgoingData);
    // console.log(incomingData);
    // console.log(allData);
  };

  const getBalance = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const account = await signer.getAddress();

        const sf = await Framework.create({
          chainId: 5,
          provider: provider,
        });

        const DAIxContract = await sf.loadSuperToken("0x3427910EBBdABAD8e02823DFe05D34a65564b1a0");
        const DAIx = DAIxContract.address;

        try {
          const b = await DAIxContract.balanceOf({
            account: account,
            providerOrSigner: signer,
          });
          const bal = ethers.utils.formatEther(b);
          setBalane(bal);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDropDownAll(true);
    setDropDownIncoming(false);
    setDropDownOutgoing(false);
    getBalance();
    loadData();
  }, [address, chain]);

  if (isConnected) {
    return (
      <div className="main-container w-full h-screen ">
        <ChainSelect chain={chain} setChain={setChain} />
        <div className="max-w-6xl mx-auto mt-10 rounded-2xl bg-white w-full ">
          <DashboardHeader isConnected={isConnected} />
          <div className="db-box-parent">
            <Table
              balance={balance}
              total={total}
              allData={allData}
              outgoingData={outgoingData}
              incomingData={incomingData}
              dropDown={dropDown}
              dropDownIncoming={dropDownIncoming}
              dropDownOutgoing={dropDownOutgoing}
              setDropDown={setDropDown}
              setDropDownAll={setDropDownAll}
              setDropDownIncoming={setDropDownIncoming}
              setDropDownOutgoing={setDropDownOutgoing}
            />
          </div>
        </div>
      </div>
    );
  }

  return <ConnectWalletSection />;
}

export default Dashboard;
