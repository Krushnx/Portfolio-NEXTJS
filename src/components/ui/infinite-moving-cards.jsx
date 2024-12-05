"use client";
import './ui.css'

import { cn } from "@/lib/Libutils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import WorkSkill from '../project/WorkSkill';
import { logos } from '../../../public/logo/logo';
import Link from 'next/link';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const contacts = ['React']
  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] bg-tagBg"

            key={item.name}
          >
            <blockquote>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" transform="rotate(180)" fill="#191f3d" height="100" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 379.51"><path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z" /></svg>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center justify-between">
                <div className='flex'>
                  <div className="relative w-[60px] h-[60px] overflow-hidden rounded-[100px]">
                    <Image
                      src={item.profile}
                      alt="Description of the image"
                      layout="fill" // Fill the container
                      objectFit="cover" // Cover the container while maintaining aspect ratio
                    />
                  </div>
                  <div className="flex flex-col ml-[15px] ">
                    <span className=" font-kanit text-[21px]">{item.name}</span>
                    <span className="font-summery text-gray-300 text-[17px]">{item.designation}</span>
                    <Link href={item.companyURL} className='flex items-center'>
                      <span className='font-summery text-gray-500 mt-[-7px]'>@&nbsp;</span><span className="hover:underline font-summery text-gray-500 mt-[-7px]  pointer">{item.company}</span>
                    </Link>
                  </div>
                </div>
                <Link href={item.linkdedin}>
                  <div className="relative w-[40px] h-[40px]  overflow-hidden group">
                    <Image
                      src={logos['Linkedin']}
                      alt="Description of the image"
                      layout="fill" // Fill the container
                      objectFit="contain" // Cover the container while maintaining aspect ratio
                    />
                  </div>

                </Link>

              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
