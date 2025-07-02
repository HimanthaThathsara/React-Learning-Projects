// import React from "react";
// import Orb from "../../../../components/Navbar/reactbits/Backgrounds/Orb.css";

import Classes from "./Services.module.css";
import MyScrollingServices from "./MyScrollingServices";
import RoughText from "../../../../components/RoughText/RoughText";

export default function Services() {
  return (
    <section className={Classes.service} id="services-section">
      {/* Top (Hero) Section */}
      <div className={Classes.topSection}>
        <div className={Classes.heroText}>
          <h1>
            Complete <span>end-to-end</span> website <br /> development
          </h1>
        </div>
        <div className={Classes.serviceUs}>
          <h2>
            <RoughText
              type="underline"
              color="white"
              strokeWidth={1}
              padding={2}
              iterations={1}
            >
              Services
            </RoughText>
          </h2>
          <p>
            We offer a range of services that include UI/UX design, front-end
            and back-end development, and AI/ML.
          </p>
        </div>
      </div>

      <div className={Classes.slider}>
        <MyScrollingServices />
      </div>
    </section>
  );
}
