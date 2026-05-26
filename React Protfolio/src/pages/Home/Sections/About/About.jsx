import Classes from "./About.module.css";
import TiltedCard from "../../../../components/Navbar/reactbits/Components/TiltedCard/TiltedCard";
import useScreenWidth from "../../../../Hooks/useScreenWidth";
import BottomToTop from "../../../../Animations/BottomToTop";
import RoughText from "../../../../components/RoughText/RoughText";

export default function About() {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth <= 768;

  return (
    <section className={Classes.about} id="about-section">
      {/* Top (Hero) Section */}
      <div className={Classes.topSection}>
        <BottomToTop fromY={100} delay={0.85} duration={0.4}>
          <div className={Classes.heroText}>
            <h1>
              {" "}
              <span>Industrial developers</span> <br />
              ready to Build Your Brand & <br />
              Handle Everything Behind Your Website
            </h1>
          </div>
        </BottomToTop>
        <div className={Classes.aboutUs}>
          <h2>
            {" "}
            <RoughText
              type="underline"
              color="white"
              strokeWidth={1}
              padding={2}
              iterations={1}
            >
              {" "}
              About us{" "}
            </RoughText>{" "}
          </h2>
          <p>
            Let us take the weight off your shoulders — fullstack website
            development, admin access, bug fixing, and long-term support
            included.
          </p>
        </div>
      </div>

      {/* Middle/Features Section */}
      <div className={Classes.featuresSection}>
        <div className={Classes.projects}>
          {!isMobile ? (
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.02}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <>
                  <img
                    src={"/projects (7).jpg"}
                    alt="projects background"
                    draggable={false}
                    className={Classes.card_inner_img}
                  />
                  <div className={Classes.projectsInner}>
                    <h2>
                      20+ projects <br /> launched
                    </h2>
                    <p>
                      We’ll Power the Technology Behind It & <br /> We Handle
                      the Code, Security, and Hosting.
                    </p>
                    <button>
                      {" "}
                      <h5>Get started now</h5>{" "}
                    </button>
                  </div>
                </>
              }
            />
          ) : (
            <>
              <img
                src={"/projects (7).jpg"}
                alt="projects background for mobile"
                draggable={false}
                className={Classes.card_inner_img}
              />
              <div className={Classes.projectsInner}>
                <h2>
                  200+ projects <br /> launched
                </h2>
                <p>
                  We’ll Power the Technology Behind It & <br /> We Handle the
                  Code, Security, and Hosting.
                </p>
                <button>
                  {" "}
                  <h5>Get started now</h5>{" "}
                </button>
              </div>
            </>
          )}
        </div>

        <div className={Classes.featuresList}>
          <div className={Classes.featureBox}>
            <h3>Fullstack development</h3>
            <p>
              Our team excels in every aspect of web development, from design to
              development and AI/ML, with a proven track record of creating
              impactful, high performing websites.
            </p>
          </div>
          <div className={`${Classes.featureBox}`}>
            <h3>Quick delivery</h3>
            <p>
              We understand the importance of time in business. Our streamlined
              processes and efficient workflows ensure that your website is
              delivered on time, without compromising on quality.
            </p>
          </div>
          <div className={Classes.featureBox}>
            <h3>Technical Support</h3>
            <p>
              Our commitment to your success doesn't end at launch. We offer
              comprehensive technical support to address any issues that may
              arise, ensuring your website remains functional and up-to-date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
