import React from "react";
import MultiInfo from "./MultiInfo";
import ConnectWalletCustom from "./ConnectWalletCustom";

import avatar1 from "../public/avatar-image.gif";
import avatar2 from "../public/avatar2.png";
import avatar3 from "../public/avatar3.png";
import avatar4 from "../public/avatar4.png";

const dataArr = [
    {
      title: "Controll Your Stream",
      info: "Controll stream on a crosschain level",
      avatar1: avatar1,
      avatar2: avatar2,
    },
    {
      title: "One Click Stream",
      info: " Hassle less stream with one click",
      avatar1: avatar2,
      avatar2: avatar3,
    },
    {
      title: "Get Notified",
      info: "Get notified when your stream is live",
      avatar1: avatar3,
      avatar2: avatar4,
    },
    {
      title: "Send a XStream<",
      info: "Pick a Sender, Recipient, Token and Network on a differnt chain",
      avatar1: avatar4,
      avatar2: avatar1,
    },
    {
      title: "Modify and Cancle Streams",
      info: "Update Flow Rate and Delete a Stream using Operator Control",
      avatar1: avatar1,
      avatar2: avatar2,
    },
    {
      title: "View Streams",
      info: "View All Streams and their details",
      avatar1: avatar2,
      avatar2: avatar3,
    },
  ]

export function ConnectWalletSection() {
  return (
    <div className="db-sub">
      <h1>Connect to XStream</h1>
      <p>Connect your wallet or take a look around!</p>
      <div className="db-grid-sub w-[70%] mx-auto my-0">
        <MultiInfo dataArr={dataArr} />
      </div>
      <div className="custom-wallet w-80 mx-auto my-8">
        <ConnectWalletCustom />
      </div>
    </div>
  );
}
