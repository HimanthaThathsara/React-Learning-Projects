import React from "react";
import ShinyText from "../../../../../components/Navbar/reactbits/ShinyText/ShinyText";
import Classes from "../Hero.module.css";
// import useScreenWidth from "../../../../../Hooks/useScreenWidth";

export default function SubHeading() {
  const text =
    window.innerWidth < 480
      ? `You Run Your Business \n We Handle Everything Behind Your Website.`
      : window.innerWidth < 600
      ? ` We don't just build websites — we become your long-term partner \n taking care of backend systems, maintenance, and proactive security support. `
      : `We don't just build websites — we become your long-term partner \n taking care of backend systems, maintenance, and proactive security support.`;

  return (
    <>
      <ShinyText
        text={text}
        disabled={false}
        speed={3}
        className={Classes.subHeadingCon}
      />
    </>
  );
}
