"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import guageImg from "@/assets/icon-guage.png";
import clickImg from "@/assets/icon-click.png";
import starsImg from "@/assets/icon-stars.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

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

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
  };
  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="relative border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 lg:flex-1"
      onClick={props.onClick}
    >
      {props.selected && (
          <motion.div
            style={{
              maskImage,
            }}
            className="absolute inset-0 border border-[#A369FF] -m-px rounded-xl"
          ></motion.div>
      )}
      <div className="border border-white/15 p-2.5 rounded-lg inline-flex items-center w-12 h-12">
        <Image width={40} height={8} src={props.icon} alt="icon" />
      </div>
      <div className="p-2.5">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

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
        {tabs.map((tab, tabIndex) => (
          <FeatureTab
            {...tab}
            selected={selectedTab === tabIndex}
            onClick={() => handleSelectedTab(tabIndex)}
            key={tab.title}
          />
        ))}
      </div>
      <div className="rounded-xl mt-3 p-2.5 border border-white/20">
        <motion.div
          className="aspect-video bg-cover border border-white/20 rounded-lg"
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${productImage.src})`,
          }}
        ></motion.div>
      </div>
    </section>
  );
};
