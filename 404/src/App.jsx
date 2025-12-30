import "./App.css";

import {useEffect} from "react";
import {gsap, Expo} from "gsap";

function App() {
  // IMPORTANT
  // if the content is not loaded, remove this useEffect and the gsap code.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navbar > div", 1.6, {
        opacity: 0,
        y: 60,
        ease: Expo.easeInOut,
        delay: 2.4,
      });
      gsap.from(".site-logo", 1.6, {
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut,
        delay: 2.4,
      });
      gsap.from(".header > span", 1.5, {
        top: "-100vh",
        ease: "bounce.out",
        delay: 1,
        stagger: 0.2,
      });
      gsap.to(".footer span", 0.4, {
        y: -40,
        ease: Expo.easeInOut,
        delay: 2.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="container">
        <div className="site-logo">CountStrick</div>
        <div className="navbar">
          <div className="site-info">Reality</div>
          <div className="site-menu">
            <div className="menu-item">Projects</div>
            <div className="menu-item">About</div>
            <div className="menu-item">Contact</div>
          </div>
        </div>

        <div className="header-container">
          <div className="header">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
        </div>

        <div className="footer">
          <span>
            Seems you are lost, come back <u>Home</u>
          </span>
          <div className="footer-wrapper"></div>
        </div>
      </div>
    </>
  );
}

export default App;
