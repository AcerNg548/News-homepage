"use client";
import NavBar from "./component/NavBar";
import Body from "./component/Body";

export default function Home() {
  return (
    <div
      className="w-screen  bg-OffWhite py-10 px-14  relative
      mobile:flex mobile:flex-col mobile:px-4 mobile:py-4 
      mobileBig:flex mobileBig:flex-col mobileBig:px-4 mobileBig:py-4
    "
    >
      <NavBar />
      <Body />
    </div>
  );
}
