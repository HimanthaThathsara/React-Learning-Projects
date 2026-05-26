// import React from "react";

import useScreenWidth from "../../Hooks/useScreenWidth";
import GradientText from "../Navbar/reactbits/TextAnimantions/GradientText/GradientText";

export default function Logo({ alwaysShowText = false }) {
  const isMobile = useScreenWidth() < 768;

  return (
    <>
      <div className="logo">
        <img src="/Apex-lanaka-icon.png" alt="apex lanaka logo" />
        {/* <h3>APEX LANAKA</h3> */}
        {(!isMobile || alwaysShowText) && (
          <GradientText
            colors={["#7e27ff", "#d0a0fc", "#7e27ff", "#d0a0fc", "#7e27ff"]}
            animationSpeed={10}
            showBorder={false}
            className="custom-class"
          >
            APEX LANAKA
          </GradientText>
        )}
      </div>
    </>
  );
}
