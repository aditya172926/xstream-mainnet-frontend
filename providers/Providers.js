import React from "react";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { wagmiClient, chains } from "@/lib/wagmi";
import { RoutesProvider } from "./RoutesProvider";

const Providers = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#10bb35",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <RoutesProvider>
        {children}
        </RoutesProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
