import { RoutesContext } from "@/providers/RoutesProvider";
import { useContext } from "react";

export const useRoutes = () => useContext(RoutesContext);