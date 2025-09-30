import React from 'react'
import { useRef } from 'react'
import image1 from '../../assets/whatwedo1.png'
import image2 from '../../assets/whatwedo2.png'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function WhatWeDo() {

  const scope = useRef(null);

  useGSAP(() => {
    const root = scope.current;

    const leftRows = root.querySelectorAll(".wwd-row.from-left");
    const rightRows = root.querySelectorAll(".wwd-row.from-right");

    leftRows.forEach((row) => {
      gsap.fromTo(row,
        { autoAlpha: 0, x: "-25vw" },
        {
          autoAlpha: 1, x: 0, duration: 1.2, ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        }
      );

      gsap.fromTo(row.querySelectorAll(".wwd-piece"),
        { y: 40, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", stagger: 0.12,
          immediateRender: false,
          scrollTrigger: { trigger: row, start: "top 90%", end: "bottom 10%", toggleActions: "play none none reverse" }
        }
      );
    });

    rightRows.forEach((row) => {
      gsap.fromTo(row,
        { autoAlpha: 0, x: "25vw" },
        {
          autoAlpha: 1, x: 0, duration: 1.2, ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom 10%",
             toggleActions: "play none none reverse",
            invalidateOnRefresh: true
          }
        }
      );

      gsap.fromTo(row.querySelectorAll(".wwd-piece"),
        { y: 40, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out", stagger: 0.12,
          immediateRender: false,
          scrollTrigger: { trigger: row, start: "top 90%", end: "bottom 10%",   toggleActions: "play none none reverse" }
        }
      );
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, { scope });
  return (
    <div ref={scope} className="min-h-screen px-6 md:px-16 lg:px-40 py-10">
      <div className="space-y-20 md:space-y-32 flex flex-col">


        <div className="wwd-row from-left flex flex-col md:flex-row  items-center gap-10 md:gap-28 mt-10">
          <div className="md:basis-1/2 wwd-piece">
            <img src={image2} className="w-full h-auto max-w-lg mx-auto" />
          </div>
          <div className="md:basis-1/2 wwd-piece flex flex-col md:items-start text-center md:text-start items-center justify-center gap-5 md:gap-3">
            <span className="text-[#4F46E5] text-2xl md:text-3xl font-bold">
              Web & Mobile App Development
            </span>
            <p>Your web and mobile Apps are pieces of the puzzle to grow your business.
              We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <button className="bg-[#F28D35] hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-md">
              LEARN MORE
            </button>
          </div>
        </div>


        <div className="wwd-row from-right flex flex-col md:flex-row-reverse items-center gap-10 md:gap-28">
          <div className="md:basis-1/2 wwd-piece">
            <img src={image1} className="w-full h-auto max-w-lg mx-auto" />
          </div>
          <div className="md:basis-1/2 wwd-piece flex flex-col md:items-start  text-center md:text-start items-center justify-center gap-5 md:gap-3">
            <span className="text-[#4F46E5] text-2xl md:text-3xl font-bold">
              Digital Strategy Consulting
            </span>
            <p>Your digital strategy should complement the overall marketing strategy of the company.
              In online marketing, each component will never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
            <button className="bg-[#F28D35] hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-md">
              LEARN MORE
            </button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default WhatWeDo
