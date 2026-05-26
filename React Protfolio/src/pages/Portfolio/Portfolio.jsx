// import Lottie from 'lottie-react';
// import noDataAnimation from '../../utils/gifs/nodata.json';

import Card from "./Card";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Classes from "./Portfolio.module.css";
import { styled } from "@mui/material/styles";
import { Pagination, Stack } from "@mui/material";
import PortfolioFilters from "./PortfolioFilters";
import { AnimatePresence, motion } from "framer-motion";
import RoughText from "../../components/RoughText/RoughText";
import SkeletonLoading from "./SkeletonLoading/SkeletonLoading";
import FuzzyText from "../../components/Navbar/reactbits/TextAnimantions/FuzzyText/FuzzyText";

const CustomPagination = styled(Pagination)(
  ({ theme, bgcolor, textColor, arrowColor }) => ({
    "& .MuiPaginationItem-root": {
      backgroundColor: bgcolor || "transparent",
      color: textColor || theme.palette.text.primary,
    },
    "& .MuiPagination-ul": {
      gap: "7px",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: textColor || theme.palette.primary.main,
      color: bgcolor || "#fff",
    },
    "& .MuiPaginationItem-previousNext": {
      color: arrowColor || textColor || theme.palette.text.primary,
    },
    "& .MuiPaginationItem-previousNext.Mui-disabled": {
      opacity: 0.3,
    },
  })
);

const Projects = [
  {
    id: 1,
    name: "Evala.ai",
    title: "Evala.ai | Ai-driven startup",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/Nixon (1).jpeg",
    images: [
      "/Nixon (1).jpeg",
      "/Nixon (2).jpeg",
      "/Nixon (3).jpeg",
      "/Nixon (4).jpeg",
      "/Nixon (5).jpeg",
      "/Nixon (6).jpeg",
      "/Nixon (7).jpeg",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov 10, 2024",
    description: (
      <div className="mb10">
        <p>
          Evala.ai is a comprehensive program and deal management platform
          designed to streamline accelerators, pitch competitions, and
          investment firms. Trusted by industry leaders, Evala offers tools to
          create branded, custom-trained AI screening tools in minutes.
        </p>
        <br />
        <p>
          We developed the entire frontend with optimized React practices,
          integrating Framer Motion for animations, GSAP for timeline effects,
          Swiper for sliders, and Three.js for 3D elements. Using Draft.js for
          rich text handling, I applied lazy loading to enhance performance and
          reduce load times, resulting in a fast and scalable user interface.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    name: "404 fetch Error",
    title: "404 fetch Error",
    link: "none",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/404 Page.jpeg",
    images: [
      "/ourprojects/pitchperfect/1.webp",
      "/ourprojects/pitchperfect/2.png",
      "/ourprojects/pitchperfect/3.png",
      "/ourprojects/pitchperfect/4.png",
      "/ourprojects/pitchperfect/5.png",
      "/ourprojects/pitchperfect/6.png",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "Redux",
      "ExpressJS",
      "Html",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Nov, 2023",
    description: (
      <div className="mb10">
        <p>
          Designed to help early stage startups create and perfect their pitch
          deck, leading to increased chances of winning competitions and
          attracting investors. Upload your pitch deck and our AI will analyze
          it, providing actionable feedback and suggestions and a score based on
          three categories to help you refine your pitch deck.
        </p>
        <br />
        <p>
          The model is trained by analyzing over 20,000 VC blogs, investment
          memos, and successful pitch decks.
        </p>
      </div>
    ),
  },
];

export default function Portfolio() {
  const [loading, setLoading] = useState(false);

  // ----------------------------------------------------------------
  // 1) State to hold the currently filtered projects
  // ----------------------------------------------------------------
  const [filteredProjects, setFilteredProjects] = useState(Projects);

  // ----------------------------------------------------------------
  // 2) Pagination logic
  // ----------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentItems = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, filteredProjects.length);
  const totalItems = filteredProjects.length;

  // ----------------------------------------------------------------
  // 3) "Key" to force re-mount PortfolioFilters on "Clear"
  // ----------------------------------------------------------------
  const [filterKey, setFilterKey] = useState(0);

  // ----------------------------------------------------------------
  // 4) Handle Filter Changes (from child)
  // ----------------------------------------------------------------
  const handleFilterChange = (filters) => {
    let updatedList = [...Projects];

    // 1) INDUSTRY
    if (filters.industry && filters.industry !== "All") {
      updatedList = updatedList.filter(
        (proj) => proj.industry === filters.industry
      );
    }

    // 2) PROJECT TYPE
    if (filters.projectType && filters.projectType !== "All") {
      updatedList = updatedList.filter(
        (proj) => proj.projectType === filters.projectType
      );
    }

    // 4) FEATURES (multi-select checkboxes)
    if (filters.features && filters.features.length > 0) {
      updatedList = updatedList.filter((proj) =>
        filters.features.every((feat) => proj.features.includes(feat))
      );
    }

    // Finally, set the filtered list & reset to page 1
    setFilteredProjects(updatedList);
    setCurrentPage(1);
  };

  // ----------------------------------------------------------------
  // 5) Clear All Filters
  // ----------------------------------------------------------------
  const handleClearAll = () => {
    setFilteredProjects(Projects);
    setCurrentPage(1);
    setFilterKey((prev) => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>Our Projects - See Our Work</title>
        <meta
          name="description"
          content="Check out our portfolio showcasing various projects including web apps, e-commerce sites, and custom software solutions."
        />
        <meta
          name="keywords"
          content="Web Development, full stack, AI development, UI/UX Design, SEO Services, SaaS, Frontend Developer, AI chatbots, modern website, evala.ai, calendia.io, pitchperfecter.ai"
        />
        <meta content="index, follow" />
      </Helmet>

      <section className={Classes.hero}>
        <h2>
          What We’ve Been{" "}
          <span>
            <RoughText
              type="underline"
              color="white"
              strokeWidth={1}
              padding={2}
              iterations={1}
            >
              {" "}
              Up To{" "}
            </RoughText>
          </span>
        </h2>
        <div className={Classes.grid}>
          {/* Left Column (Filters) */}
          <div className={Classes.gridLeft}>
            <div>
              <div className="flexBetween10 mb20">
                <h4>Filters</h4>
                <button className={Classes.clearBtn} onClick={handleClearAll}>
                  <h5>Clear</h5>
                </button>
              </div>
              <div>
                {/* Force re-mount the filter component on clear */}
                <PortfolioFilters
                  key={filterKey}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>
          </div>

          {/* Right Column (Projects / Pagination) */}
          <div className={Classes.gridRight}>
            <div className={Classes.cardsWrapper}>
              <AnimatePresence mode="wait">
                {/* If no filtered projects, show "No projects" */}
                {currentItems.length === 0 ? (
                  <motion.div
                    key="no-projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      gridColumn: "1/-1",
                      color: "white",
                      fontSize: "1rem",
                      marginTop: "3rem",
                      padding: "2rem 0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <FuzzyText
                      baseIntensity={0.3}
                      hoverIntensity={0.5}
                      enableHover={true}
                      height="40px"
                    >
                      Project
                    </FuzzyText>
                    <FuzzyText
                      baseIntensity={0.3}
                      hoverIntensity={0.5}
                      enableHover={true}
                      height="20px"
                    >
                      not found
                    </FuzzyText>
                  </motion.div>
                ) : (
                  currentItems.map((item, idx) => {
                    const delay = idx * 0.05;
                    return (
                      <motion.div
                        key={`${currentPage}-${item.id}`}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ delay, duration: 0.3 }}
                      >
                        <Card key={item.id} item={item} />
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            {/* Pagination Footer */}
            <div className={Classes.pagFooter}>
              <h5 style={{ height: "1.2rem" }}>
                {loading ? (
                  <SkeletonLoading height="1.2rem" width="10rem" br="4px" />
                ) : (
                  // If no items at all, show "Showing 0 to 0 of 0 results"
                  `Showing ${currentItems.length === 0 ? 0 : startItem} to ${
                    currentItems.length === 0 ? 0 : endItem
                  } of ${currentItems.length === 0 ? 0 : totalItems} results`
                )}
              </h5>

              <Stack spacing={2} className={Classes.pagination}>
                {loading ? (
                  <SkeletonLoading height="1.2rem" width="5rem" br="4px" />
                ) : (
                  <CustomPagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    shape="rounded"
                    bgcolor="#222"
                    textcolor="#fff"
                    arrowcolor="white"
                  />
                )}
              </Stack>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
