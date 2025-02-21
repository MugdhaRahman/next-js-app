"use client"; // Required for Next.js App Router

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Slider1() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    gsap.to(panels, {
      yPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${100 * panels.length}vh`, // Makes scrolling smooth across all slides
        scrub: true,
        pin: true, // Keeps the container pinned
        snap: 1 / (panels.length - 1), // Ensures smooth snapping between slides
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      {/* Slider Sections */}
      <section className="panel h-screen flex flex-col justify-center items-start bg-[#0D041A] bg-[url('/slider-bg.svg')] bg-cover">
        <h1 className="text-[92px] font-extrabold bg-gradient-to-r from-[#D9CAFF] to-[#CC7FED] bg-clip-text text-transparent ml-[80px]">
          DISCOVER <br /> OUR <br /> SOLUTIONS
        </h1>
      </section>

      <section className="panel h-screen flex flex-col justify-center items-start bg-[#0D041A] bg-[url('/slider-bg.svg')] bg-cover">
        <h1 className="text-[92px] font-extrabold bg-gradient-to-r from-[#D9CAFF] to-[#CC7FED] bg-clip-text text-transparent ml-[80px]">
          Slider1
        </h1>
      </section>

      <section className="panel h-screen flex flex-col justify-center items-start bg-[#0D041A] bg-[url('/slider-bg.svg')] bg-cover">
        <h1 className="text-[92px] font-extrabold bg-gradient-to-r from-[#D9CAFF] to-[#CC7FED] bg-clip-text text-transparent ml-[80px]">
          Slider2
        </h1>
      </section>

      <section className="panel h-screen flex flex-col justify-center items-start bg-[#0D041A] bg-[url('/slider-bg.svg')] bg-cover">
        <h1 className="text-[92px] font-extrabold bg-gradient-to-r from-[#D9CAFF] to-[#CC7FED] bg-clip-text text-transparent ml-[80px]">
          Slider3
        </h1>
      </section>
    </div>
  );
}
