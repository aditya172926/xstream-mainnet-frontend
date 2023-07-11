import { ConnectButton } from "@rainbow-me/rainbowkit"
import Image from "next/image"
import logowhite from "../image/LogoWhite.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between p-2 items-center absolute w-full px-4 z-10">
    <div className="navbar-logo flex-auto w-64  py-4 px-3">
      {/* //logo  */}
      <Image src={logowhite} alt="logo" height={40} />
    </div>
    <div className="connect-wallet">
      <ConnectButton
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </div>
  </div>
  )
}
export default Navbar