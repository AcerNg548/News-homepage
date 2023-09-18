"use client";
import brick from "@/public/assets/images/image-web-3-desktop.jpg";
import brickM from "@/public/assets/images/image-web-3-mobile.jpg";

import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="w-full flex flex-row gap-10 mt-4
    mobile:flex mobile:flex-col
    mobileBig:flex mobileBig:flex-col
    "
    >
      <div
        className="w-[70%] flex flex-col
      mobile:w-full
      mobileBig:w-full
      "
      >
        <div>
          <Image
            src={brick}
            alt="desktopBg"
            priority
            className="object-contain mobile:hidden mobileBig:hidden"
          />
          <Image
            src={brickM}
            alt="mobileBg"
            priority
            className="object-contain desktop:hidden"
          />
        </div>
        <div
          className="w-full flex items-start
        mobile:flex-col
        mobileBig:flex-col
        "
        >
          <div
            className="w-[50%] p-4 pr-20
          mobile:w-full mobile:pr-6 mobile:p-0 mobile:mt-4
          mobileBig:w-full mobileBig:pr-10 mobileBig:p-0 mobileBig:mt-4
          "
          >
            <h1
              className="font-black text-[50px] leading-[60px]
            mobile:text-[36px] mobile:leading-[42px]
            mobileBig:text-[40px] mobileBig:leading-[50px]
            "
            >
              The Bright Future of Web 3.0?
            </h1>
          </div>

          <div
            className=" flex flex-col w-[50%] p-4 
          mobile:w-full mobile:p-0
          mobileBig:w-full mobileBig:p-0
          "
          >
            <div
              className="pr-20 mt-2
            mobile:pr-0 
            mobileBig:pr-0
            "
            >
              <p
                className="text-[14px] text-DarkGrayishBlue font-medium
              mobileBig:text-[18px]
              "
              >
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
            </div>

            <div className="mt-10">
              <button className="text-OffWhite bg-SoftRed px-16 py-4  text-[10px] tracking-[4px] hover:bg-VeryDarkBlue ">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[30%] bg-VeryDarkBlue p-4 flex flex-col justify-between
      mobile:w-full
      mobileBig:w-full
      "
      >
        <div>
          <h2 className="text-SoftOrange text-[36px] font-bold ">New</h2>
        </div>

        <div
          className="flex flex-col gap-8 mb-4 text-left
        mobile:gap-4 mobile:mt-6 mobile:mb-2
        mobileBig:gap-4 mobileBig:mt-10 mobileBig:mb-2
         "
        >
          <div>
            <button
              className="text-OffWhite font-semibold text-[20px] mb-2 hover:text-SoftOrange 
            mobile:text-[16px]
            "
            >
              Hydrogen VS Electric Cars
            </button>
            <p
              className="text-DarkGrayishBlue text-[16px] 
            mobile:text-[14px]
            "
            >
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <div className="bg-DarkGrayishBlue h-[1px] mt-10 " />
          </div>

          <div>
            <button
              className="text-OffWhite font-semibold text-[20px] mb-2 hover:text-SoftOrange
            mobile:text-[16px]
            "
            >
              The Downsides of AI Artistry
            </button>
            <p
              className="text-DarkGrayishBlue text-[16px] 
            mobile:text-[14px]
            "
            >
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <div className="bg-DarkGrayishBlue h-[1px] mt-10 " />
          </div>

          <div>
            <button
              className="text-OffWhite font-semibold text-[20px] mb-2 hover:text-SoftOrange
            mobile:text-[16px]
            "
            >
              Is VC Funding Drying Up?
            </button>
            <p
              className="text-DarkGrayishBlue text-[16px] 
            mobile:text-[14px]
            "
            >
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
