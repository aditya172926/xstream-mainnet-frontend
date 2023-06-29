import { useState, useEffect } from "react";
export const useShowDashboard = () => {
  
  const [showDashboard, setDashboard] = useState(false);
  useEffect(() => {
    setDashboard(true);
  }, []);

  return {showDashboard, setDashboard}
}