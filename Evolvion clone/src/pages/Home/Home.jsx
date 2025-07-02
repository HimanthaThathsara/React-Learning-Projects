// Home.jsx
// import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import BottomToTop from "../../Animations/BottomToTop";
// // import PorfolioSection from './Sections/PorfolioSection/PorfolioSection';

import FAQ from "./Sections/FQA/FAQ";
import Classes from "./Home.module.css";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import { Helmet } from "react-helmet-async";
import Reviews from "./Sections/Review/Reviews";
import Services from "./Sections/Services/Services";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Evolvion - Custom Website Development</title>
        <meta
          name="description"
          content="Website Agency, We provide top-notch web development, AI driven SaaS, UI/UX design, and SEO services to grow your business online."
        />
        <meta
          name="keywords"
          content="Website Agency, Website Development Agency, Web Development, full stack, AI development, UI/UX Design, SEO Services, SaaS, Frontend Developer, AI chatbots, modern website"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evolvion.io/" />
      </Helmet>

      <div className={Classes.pageWrapper}>
        <Hero />
        <About />
        <Services />
        <Reviews />
        {/* <PorfolioSection /> */}
        <FAQ />
      </div>
    </>
  );
}
