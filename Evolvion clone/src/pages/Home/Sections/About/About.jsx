import React from 'react';
import Classes from './About.module.css';
import TiltedCard from '../../../../components/Navbar/reactbits/Components/TiltedCard/TiltedCard';
import useScreenWidth from '../../../../Hooks/useScreenWidth';
import BottomToTop from '../../../../Animations/BottomToTop';
import RoughText from '../../../../components/RoughText/RoughText';

export default function About() {

    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;

    return (
        <section className={Classes.about} id='about-section' >
            {/* Top (Hero) Section */}
            <div className={Classes.topSection}>
                <BottomToTop fromY={100} delay={0.85} duration={0.4}>
                    <div className={Classes.heroText}>
                        <h1> <span>Experienced developers</span> <br />ready to bring your website to life</h1>
                    </div>
                </BottomToTop>
                <div className={Classes.aboutUs}>
                    <h2> <RoughText type="underline" color="white" strokeWidth={1} padding={2} iterations={1} > About us </RoughText> </h2>
                    <p>
                        We specialize in designing and developing full stack websites
                        with a focus on AI/ML development.
                    </p>
                </div>
            </div>

            {/* Middle/Features Section */}
            <div className={Classes.featuresSection}>

                <div className={Classes.projects}>
                    {!isMobile ?
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
                                    <img src={'/images/project.png'} alt='projects background' draggable={false} className={Classes.card_inner_img} />
                                    <div className={Classes.projectsInner} >
                                        <h2>200+ projects <br /> launched</h2>
                                        <p>
                                            With over 200 successful projects, we bring experience,
                                            creativity, and reliability to every new website.
                                        </p>
                                        <button> <h5>Get started now</h5> </button>
                                    </div>
                                </>
                            }
                        />
                        :
                        <>
                            <img src={'/images/project.png'} alt='projects background for mobile' draggable={false} className={Classes.card_inner_img} />
                            <div className={Classes.projectsInner} >
                                <h2>200+ projects <br /> launched</h2>
                                <p>
                                    With over 200 successful projects, we bring experience,
                                    creativity, and reliability to every new website.
                                </p>
                                <button> <h5>Get started now</h5> </button>
                            </div>
                        </>
                    }
                </div>

                <div className={Classes.featuresList}>
                    <div className={Classes.featureBox}>
                        <h3>Fullstack development</h3>
                        <p>
                            We deliver complete solutions, from design to development and AI/ML,
                            with a proven track record of creating impactful, high-performing websites.
                        </p>
                    </div>
                    <div className={`${Classes.featureBox}`}>
                        <h3>Quick delivery</h3>
                        <p>
                            With over a decade of experience, we deliver innovative,
                            timeless designs with a focus on customer satisfaction and speed.
                        </p>
                    </div>
                    <div className={Classes.featureBox}>
                        <h3>Unlimited revisions</h3>
                        <p>
                            With unlimited revisions and dedicated support, we ensure your vision
                            and website is brought to life exactly as you imagine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
