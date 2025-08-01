// import React from 'react'
// import { StarBorder } from '@mui/icons-material'

import BgScene from "./comp/BgScene";
import Heading from "./comp/Heading";
import Classes from "./Hero.module.css";
import SubHeading from "./comp/SubHeading";
import { useNavigate } from "react-router-dom";
import BottomToTop from "../../../../Animations/BottomToTop";

export default function Hero() {
  const navigateTo = useNavigate();
  const redirectTo = (page) => {
    navigateTo(page);
  };

  return (
    <div id="hero" className={Classes.hero}>
      <div className={Classes.main}>
        <div className={Classes.content}>
          <BottomToTop fromY={100} delay={0.5} duration={0.4}>
            <Heading />
          </BottomToTop>
          <BottomToTop fromY={100} delay={0.65} duration={0.4}>
            <SubHeading />
          </BottomToTop>
          <BottomToTop fromY={100} delay={0.75} duration={0.4}>
            <div className={Classes.buttons}>
              <button
                className={Classes.btn1}
                onClick={() => {
                  redirectTo("/portfolio");
                }}
              >
                {" "}
                <h5>See our work</h5>{" "}
              </button>
              <button
                className={Classes.btn2}
                onClick={() => {
                  redirectTo("/contact-us");
                }}
              >
                {" "}
                <h5>Come talk to us</h5>{" "}
              </button>
            </div>
          </BottomToTop>
        </div>
      </div>
      <BottomToTop fromY={0} delay={1.5} duration={0.5}>
        <div className={Classes.splineBgCon}>
          <BgScene />
        </div>
      </BottomToTop>
    </div>
  );
}
