import { createContext, useState } from "react";

export const NotificationsContext = createContext(false);

export const NotificationsProvider = ({ children }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <NotificationsContext.Provider
      value={{ showNotifications, setShowNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
