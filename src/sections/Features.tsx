"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";


const tabs = [
  {
    icon: "../assets/icon-gauge.svg",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "../assets/icon-click.svg",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "../assets/lottie/icon-stars.svg",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="container">
      <h2 className="text-5xl text-center">Elevate your SEO efforts.</h2>
      <p className="text-white/70 text-center py-5">
        From small startups to large enterprises, our AI-driven tool has
        revolutionized the way businesses approach SEO.
      </p>
      <div>
        {tabs.map((tab) => (
          <div key={tab.title} className="border border-white/15 rounded-lg p-2.5 flex items-center my-5">
            <div className="border border-white/15 p-2.5 rounded-lg"><Image  width={40} height={8} src={tab.icon} alt="icon"/></div>
            <div className="p-2.5">{tab.title}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg p-2 my-10 border border-white/15">
      <div className="rounded-lg p-2 border border-white/15">
        <Image src={productImage} alt="product Image"/>
      </div>
      </div>
    </section>
  );
};
