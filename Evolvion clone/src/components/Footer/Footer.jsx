// import React from "react";
// import Aurora from "../Navbar/reactbits/Backgrounds/Aurora.css";

import Logo from "../Logo/Logo";
import Classes from "./Footer.module.css";
import { scrollToElement } from "../../utils/scrollToElement";

export default function Footer() {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.topArea}>
        {/* Left: Logo + CTA */}
        <div className={Classes.leftBlock}>
          <a href="/" style={{ height: "2.2rem", width: "fit-content" }}>
            <Logo alwaysShowText={true} />
          </a>
          <div className={Classes.ctaCard}>
            <p>Bring your website to life.</p>
            <a
              href="https://cal.com/brandon-feinstein-apkvsi/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                {" "}
                <h5>Book a call</h5>{" "}
              </button>
            </a>
          </div>
        </div>

        {/* Right: Footer navigation columns */}
        <div className={Classes.navColumns}>
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                {" "}
                <h5
                  onClick={() => {
                    scrollToElement("about-section", -50);
                  }}
                >
                  About{" "}
                </h5>{" "}
              </li>
              <li>
                {" "}
                <h5
                  onClick={() => {
                    scrollToElement("services-section", -50);
                  }}
                >
                  Services{" "}
                </h5>{" "}
              </li>
              <li>
                {" "}
                <h5
                  onClick={() => {
                    scrollToElement("reviews-section", -50);
                  }}
                >
                  Reviews{" "}
                </h5>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                {" "}
                <h5>Blog</h5>{" "}
              </li>
              <li>
                {" "}
                <h5
                  onClick={() => {
                    scrollToElement("faq", -50);
                  }}
                >
                  FAQ{" "}
                </h5>{" "}
              </li>
              <li>
                {" "}
                <h5>Careers</h5>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                {" "}
                <a href="/privacy-policy" target="_blank">
                  {" "}
                  <h5>Terms of Use</h5>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/privacy-policy" target="_blank">
                  {" "}
                  <h5>Privacy Policy</h5>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className={Classes.divider}></div>

      {/* Bottom bar: copyright + social */}
      <div className={Classes.bottomBar}>
        <span>
          <h5>© 2024 Evolvion, All rights reserved.</h5>
        </span>
        {/* Example LinkedIn icon or any social link */}
        <a
          href="https://www.linkedin.com/company/evolvionio"
          target="_blank"
          rel="noopener noreferrer"
          className={Classes.socialLink}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>
      </div>
      {/* <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232","#000000"]}
                speed={0.5}
                amplitude={1}
            /> */}
    </footer>
  );
}
