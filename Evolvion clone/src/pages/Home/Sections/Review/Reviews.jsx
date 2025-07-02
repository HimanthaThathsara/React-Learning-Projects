import React, { useState } from "react";
import Classes from "./Reviews.module.css";
import SpotlightCard from "../../../../components/Navbar/reactbits/Components/SpotlightCard/SpotlightCard";

// Import AnimatePresence & motion
import { AnimatePresence, motion } from "framer-motion";
import RoughText from "../../../../components/RoughText/RoughText";

export default function Reviews() {
  // Example review data
  const reviewsData = [
    {
      name: "Jon Breitegan",
      company: "Spectrum",
      avatar: "/images/jon_breitegan.webp",
      bg: "/images/reviewbg2.png",
      review: (
        <>
          Evolvion company absolutely nailed it! Their professionalism in
          website development made the process smooth and enjoyable.
        </>
      ),
    },
    {
      name: "Grant Bolton",
      company: "Bolton & AL",
      avatar: "/images/grantbolton.webp",
      bg: "/images/reviewbg3.png",
      review: (
        <>
          Expert SaaS developers! They built a scalable,{" "}
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            <span style={{ whiteSpace: "nowrap" }}> high-performing</span>{" "}
          </RoughText>{" "}
          platform with seamless features. Highly recommended!
        </>
      ),
    },
    {
      name: "Michelle Blake",
      company: "Auto-Auctions",
      avatar: "/images/michelle.webp",
      bg: "/images/reviewbg2.png",
      review: (
        <>
          We've had an amazing experience with Evolvion—excellent communication,{" "}
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            efficiency{" "}
          </RoughText>
          , and a deep understanding of our goals.
        </>
      ),
    },
    {
      name: "Clôture Antifugue",
      company: "Holorent",
      avatar: "/images/holorent_client.webp",
      bg: "/images/reviewbg1.png",
      review: (
        <>
          Evolvion delivered exceptional work with professionalism and speed.
          Tackled{" "}
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            <span style={{ whiteSpace: "nowrap" }}>complex tasks</span>{" "}
          </RoughText>
          . Highly recommend for any Web project!
        </>
      ),
    },
    {
      name: "Shena Smith",
      company: "TacticalCentre",
      avatar: "/images/shena.jpg",
      bg: "/images/reviewbg1.png",
      review:
        "I love working with this agency! They always deliver exceptional work with great attention to detail and professionalism.",
    },
    {
      name: "Derek Feniger",
      company: "Novassor",
      avatar: "/images/derek.webp",
      bg: "/images/reviewbg3.png",
      review: (
        <>
          Outstanding web development!{" "}
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            Modern{" "}
          </RoughText>
          , functional, and user-friendly solutions for any business.
        </>
      ),
    },
  ];

  // 1) If there are exactly 3 reviews, duplicate them so we can loop
  let displayedReviews = reviewsData;
  if (reviewsData.length === 3) {
    displayedReviews = [...reviewsData, ...reviewsData]; // total 6
  }

  // 2) 3 reviews per slide
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(displayedReviews.length / itemsPerSlide);

  // 3) Current slide index [0 .. totalSlides - 1]
  const [currentSlide, setCurrentSlide] = useState(0);

  // For standard "non-wrapping" behavior, we clamp slides between 0 and totalSlides - 1
  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  // 4) Slice the 3 reviews for the current slide
  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const currentItems = displayedReviews.slice(startIndex, endIndex);

  // The per-card delay array: Card 1 = 0.05s, Card 2 = 0.15s, Card 3 = 0.2s
  const delayMap = [0.05, 0.15, 0.2];

  // Determine if prev/next buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === totalSlides - 1;

  return (
    <section className={Classes.hero} id="reviews-section">
      <div className={Classes.container}>
        <h2>
          What our{" "}
          <span>
            <RoughText
              type="underline"
              color="white"
              strokeWidth={1}
              padding={2}
              iterations={1}
            >
              {" "}
              clients{" "}
            </RoughText>
          </span>{" "}
          say
        </h2>
        <p>
          With hundreds of websites completed, we bring a proven track record of
          developing websites and delivering exceptional solutions for clients
          across industries.
        </p>

        {/* Carousel area */}
        <div className={Classes.carousel}>
          {/* AnimatePresence to handle enter/exit animations */}
          <AnimatePresence mode="sync">
            {currentItems.map((review, idx) => {
              // Retrieve delay from our delayMap
              const delay = delayMap[idx] || 0.1;

              return (
                <motion.div
                  // Combine currentSlide + idx for a unique key
                  key={`${currentSlide}-${idx}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    delay,
                    duration: 0.3,
                  }}
                  style={{ display: "inline-block" }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgb(225, 187, 251, 0.2)"
                  >
                    <div className={Classes.card}>
                      <div className={Classes.profile}>
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className={Classes.avatar}
                        />
                        <div>
                          <h4>{review.name}</h4>
                          <span>{review.company}</span>
                        </div>
                      </div>

                      <div className={Classes.quoteMark}>&#10077;</div>

                      <p className={Classes.reviewText}>{review.review}</p>
                      <div className={Classes.cardBottom}>
                        <img src={review.bg} alt="card background" />
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className={Classes.btnWrapper}>
          {/* Prev Button */}
          <button
            onClick={goToPrev}
            disabled={isPrevDisabled}
            style={{
              opacity: isPrevDisabled ? 0.5 : 1,
            }}
          >
            <svg
              style={{ transform: "rotate(180deg)" }}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={isNextDisabled}
            style={{
              opacity: isNextDisabled ? 0.5 : 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
