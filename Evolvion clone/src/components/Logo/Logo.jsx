// import React from "react";

import useScreenWidth from "../../Hooks/useScreenWidth";
import GradientText from "../Navbar/reactbits/TextAnimantions/GradientText/GradientText";

export default function Logo({ alwaysShowText = false }) {
  const isMobile = useScreenWidth() < 768;

  return (
    <>
      <div className="logo">
        <img src="/logo.png" alt="evolvion logo" />
        {/* <h3>EVOLVION</h3> */}
        {(!isMobile || alwaysShowText) && (
          <GradientText
            colors={["#7e27ff", "#d0a0fc", "#7e27ff", "#d0a0fc", "#7e27ff"]}
            animationSpeed={10}
            showBorder={false}
            className="custom-class"
          >
            EVOLVION
          </GradientText>
        )}
      </div>
    </>
  );
}
