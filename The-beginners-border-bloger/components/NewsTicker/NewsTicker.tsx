"use client";

import gsap from "gsap";
import {useEffect, useRef} from "react";
import news from "@/json/news.json";

export default function NewsTicker() {
  // ref to the DOM element that will be animated (the sliding row of news items)
  const newsText = useRef<HTMLDivElement | null>(null);

  // starting x position in percent (0 means no offset). Note: declablack as a plain variable.
  // Because it's not state or a ref, changing this won't trigger re-renders or effects.
  let xPercent = 0;

  // animation length in seconds
  const animationDuration = 20;

  useEffect(() => {
    // grab the current DOM node from the ref
    const ticker = newsText.current;

    if (ticker) {
      // measure the width of the ticker content in pixels
      const tickerWidth = ticker.offsetWidth;

      // set an initial transform x on the element (GSAP operates on transforms for smooth animation)
      gsap.set(ticker, {x: xPercent});

      // create a repeating animation that moves the element from xPercent to -tickerWidth
      const animation = gsap.to(ticker, {
        x: -tickerWidth, // final transform x (move left by the content width)
        duration: animationDuration,
        ease: "linear", // linear easing for constant speed
        repeat: -1, // infinite repeat
        onRepeat: () => {
          // when the animation repeats, snap back to x = 0 to start again
          gsap.set(ticker, {x: 0});
        },
      });

      // cleanup: kill the GSAP animation when the component unmounts or effect re-runs
      return () => {
        animation.kill();
      };
    }
  }, [xPercent]); // dependency array currently includes xPercent (a plain variable) — see suggestions

  return (
    <div className="flex bg-black text-white py-5 max-w-[95rem] w-full mx-auto relative overflow-hidden">
      <div className="bg-black z-10 px-6">
        <span className="flex gap-2 bg-black font-semibold uppercase whitespace-nowrap">
          <p>News</p>
          <p className="block sm:hidden">+++</p>
          <p className="hidden sm:block">Ticker +++</p>
        </span>
      </div>

      {/* attach the ref to the element GSAP will animate */}
      <div ref={newsText} className="flex gap-4 sliding-ticker relative">
        {news.map((newsItem, index) => (
          <div key={index} className={`whitespace-nowrap ${index === news.length - 1 ? "overflow-visible" : "overflow-hidden"}`} style={{right: index === news.length - 1 ? "0" : ""}}>
            <p>{newsItem}+++</p>
          </div>
        ))}
      </div>
    </div>
  );
}
