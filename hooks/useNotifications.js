import { NotificationsContext } from "@/providers/NotificationsProvider";
import { useContext } from "react";

export const useNotifications = () => useContext(NotificationsContext);