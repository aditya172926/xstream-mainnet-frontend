import { polygonMumbai, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { configureChains, createClient } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

export const { chains, provider } = configureChains(
  [polygonMumbai, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
