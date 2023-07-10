import React from "react";
import ConnectWalletCustom from "../../components/ConnectWalletCustom";
import styles from "../../styles/Home.module.css";
import SideBarListItem from "./SideBarListItem";
import xStreamSvg from "../../image/svg/xstream.svg";
import notificationsSvg from "../../image/svg/notifications.svg";
import dashboardSvg from "../../image/svg/dashboard.svg";

const SideBar = ({ setSideBar, sideBar, sideBarConst }) => {
  return (
    <div className="min-h-screen w-[300px] border-r-[1px] py-2 px-4 bg-white pt-[100px]">
      <ConnectWalletCustom />
      <ul className="flex flex-col list-none cursor-pointer py-4 gap-[10px]">
        <div
          className={
            sideBar.dashboard
              ? `${styles.left_ul_link} ${styles.active}`
              : `${styles.left_ul_link}`
          }
          onClick={() => {
            setSideBar({ ...sideBarConst, dashboard: true });
          }}
        >
          <SideBarListItem name="dashboard" img={dashboardSvg} />
        </div>

        <div
          className={
            sideBar.xStream
              ? `${styles.left_ul_link} ${styles.active}`
              : `${styles.left_ul_link}`
          }
          onClick={() => {
            setSideBar({ ...sideBarConst, xStream: true });
          }}
        >
          <SideBarListItem name="Send XStream" img={xStreamSvg} />
        </div>

        <div
          className={
            sideBar.notification
              ? `${styles.left_ul_link} ${styles.active}`
              : `${styles.left_ul_link}`
          }
          onClick={() => {
            setSideBar({ ...sideBarConst, notification: true });
          }}
        >
          <SideBarListItem name="Notifications" img={notificationsSvg} />
        </div>
      </ul>
    </div>
  );
};

export default SideBar;

// ALREADY COMMENTED CODE
{
  /* <div
                    className={
                        showSendStream
                            ? `${styles.left_ul_link} ${styles.active}`
                            : `${styles.left_ul_link}`
                    }
                    onClick={() => {
                        setDashboard(false);
                        setSendStream(true);
                        setShowNotification(false);
                        setShowXStream(false);
                    }}
                >
                    <div className={styles.link_icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                        </svg>
                    </div>
                    <div className={styles.link_text}>Send Stream</div>
                </div> */
}

{
  /* <div className={styles.link_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M9,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v14C11,20.1,10.1,21,9,21z M15,21h4c1.1,0,2-0.9,2-2v-5 c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v5C13,20.1,13.9,21,15,21z M21,8V5c0-1.1-0.9-2-2-2h-4c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h4 C20.1,10,21,9.1,21,8z" />
            </svg>
          </div>
          <div className={styles.link_text}>Dashboard</div> */
}
