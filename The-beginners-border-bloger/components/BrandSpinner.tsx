"use client";

import gsap from "gsap";
import {useEffect, useRef} from "react";

// Used In Only Footer
export default function BrandSpinner() {
  const newsletterText = useRef<HTMLDivElement | null>(null);
  let xPercent = 0;
  const animationDuration = 20;

  useEffect(() => {
    const ticker = newsletterText.current;

    if (ticker) {
      const tickerWidth = ticker.offsetWidth;

      gsap.set(ticker, {x: xPercent});

      const animation = gsap.to(ticker, {
        x: -tickerWidth,
        duration: animationDuration,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(ticker, {x: 0});
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, [xPercent]);

  return (
    <div ref={newsletterText} className="flex bg-black text-white py-5">
      <span className="flex gap-5 pr-8 whitespace-nowrap">
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
        <p className="font-semibold text-2xl uppercase pr-8">Essentials 101 </p>
      </span>
    </div>
  );
}
