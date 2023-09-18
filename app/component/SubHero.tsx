"use client";
import retro from "@/public/assets/images/image-retro-pcs.jpg";
import topLaptop from "@/public/assets/images/image-top-laptops.jpg";
import gamingGrowth from "@/public/assets/images/image-gaming-growth.jpg";
import Card from "./Card";

export default function SubHero() {
  return (
    <div
      className="w-full grid grid-cols-3 mt-6 gap-20
    mobile:grid-cols-1 mobile:mt-10 mobile:gap-10
    mobileBig:grid-cols-1 mobileBig:mt-10 mobileBig:gap-10
    "
    >
      <Card
        header=" Reviving Retro PCs"
        iconLink={retro}
        number="01"
        paragraph="What happens when old PCs are given modern upgrades?"
      />
      <Card
        header="Top 10 Laptops of 2022"
        iconLink={topLaptop}
        number="02"
        paragraph="Our best picks for various needs and budgets."
      />
      <Card
        header="The Growth of Gaming"
        iconLink={gamingGrowth}
        number="03"
        paragraph="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}
