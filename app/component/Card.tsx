"use client";

import Image, { StaticImageData } from "next/image";

interface CardProps {
  iconLink: string | StaticImageData;
  number: string;
  header: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ iconLink, number, header, paragraph }) => {
  return (
    <div className="flex items-start">
      <div>
        <Image src={iconLink} alt="icon" priority className="w-28" />
      </div>

      <div className="flex flex-col px-4">
        <p
          className="text-GrayishBlue font-semibold text-[26px] 
        mobile:text-[20px]
        mobileBg:text-[24px]
        "
        >
          {number}
        </p>
        <a
          className="text-VeryDarkBlue font-bold text-[16px] hover:text-SoftRed text-left mb-4 cursor-pointer
           mobile:text-[14px]
        "
        >
          {header}
        </a>
        <p
          className="text-DarkGrayishBlue text-[12px] 
          mobile:font-semibold
          mobileBig:font-semibold
        "
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
