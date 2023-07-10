import Dashboard from "@/components/Dashboard/Dashboard";
import Notifications from "@/components/Notifications";
import SendStream from "@/components/SendStream";
import SendXStream from "@/components/SendXStream";

const RightPannel = ({ sideBar }) => {
  console.log(sideBar);
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="inside-main-right">
        {sideBar.dashboard ? (
          <Dashboard />
        ) : sideBar.sendStream ? (
          <SendStream />
        ) : sideBar.xStream ? (
          <SendXStream />
        ) : sideBar.notifications ? (
          <Notifications notifications={streamNotifications} />
        ) : null}
      </div>
    </div>
  );
};

export default RightPannel;
