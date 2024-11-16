"use client"

import Image from "next/image";
import productImage from "@/assets/product-image.png";

import guageImg from "@/assets/icon-guage.png"
import clickImg from "@/assets/icon-click.png"
import starsImg from "@/assets/icon-stars.png"


const tabs = [
  {
    icon: guageImg,
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: clickImg,
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: starsImg,
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="container py-20 md:py-24">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter">
        Elevate your SEO efforts.
      </h2>
      <p className="text-white/70 md:text-xl max-w-xl mx-auto text-center text-lg tracking-tight mt-5">
        From small startups to large enterprises, our AI-driven tool has
        revolutionized the way businesses approach SEO.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3 ">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className="border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 lg:flex-1"
          >
            <div className="border border-white/15 p-2.5 rounded-lg inline-flex items-center w-12 h-12">
              <Image width={40} height={8} src={tab.icon} alt="icon" />
            </div>
            <div className="p-2.5">{tab.title}</div>
            {tab.isNew && (
              <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                new
              </div>
            )}
          </div>
        ))}
      </div>
        <div className="rounded-xl mt-3 p-2.5 border border-white/20">
<div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{
  backgroundImage: `url(${productImage.src})`
}}></div>
          {/* <Image src={productImage} alt="product Image" /> */}
        </div>
    </section>
  );
};
