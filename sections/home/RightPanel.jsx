import React from "react";

import Dashboard from "../../components/Dashboard";
import SendStream from "../../components/SendStream";
import SendXStream from "../../components/SendXStream";
import Notifications from "../../components/Notifications";

import {
  useStreamNotifications,
  useShowDashboard,
  useStreams,
  useNotifications,
} from "@/hooks";

export const RightPanel = () => {
  const { streamNotifications } = useStreamNotifications();
  const { showDashboard } = useShowDashboard();
  const { showSendStream, showXStream } = useStreams();
  const { showNotification } = useNotifications();
  return (
    <div className="w-full bg-[#F4F4F4]">
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
    </div>
  );
};

