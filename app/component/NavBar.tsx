import logo from "@/public/assets/images/logo.svg";
import hamburger from "@/public/assets/images/icon-menu.svg";

import Image from "next/image";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div
      className="w-full   flex flex-row justify-between items-center
    "
    >
      <div>
        <Image src={logo} alt="logo" priority />
      </div>

      <div
        className="text-VeryDarkBlue text-[12px] font-medium
      
      "
      >
        <ul
          className=" flex gap-16
        mobile:hidden
        mobileBig:hidden
        "
        >
          <button className="hover:text-SoftOrange">Home</button>
          <button className="hover:text-SoftOrange">New</button>
          <button className="hover:text-SoftOrange">Popular</button>
          <button className="hover:text-SoftOrange">Trending</button>
          <button className="hover:text-SoftOrange">Categories</button>
        </ul>

        <div className="desktop:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
