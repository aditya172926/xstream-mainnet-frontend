import "../styles/globals.css";
import "../styles/dashboard.css";
import "../styles/container.css";
import "../styles/setpermission.css";
import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }) {
  return < AppProvider >
    <Component {...pageProps} />;
  </AppProvider >

}
