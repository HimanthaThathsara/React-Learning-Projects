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
            <span>Services</span> <br />
            We Provide
            <br />
            Solutions for Your Business
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
            We offer a comprehensive range of services to meet your business
            needs, including custom website development, technical support, new
            website creation, ongoing support, and complete digital
            transformation to help you succeed.
          </p>
        </div>
      </div>

      <div className={Classes.slider}>
        <MyScrollingServices />
      </div>
    </section>
  );
}
