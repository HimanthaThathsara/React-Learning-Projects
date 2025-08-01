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
      name: "Himantha Thathsara",
      company: "Spectrum",
      avatar: "/Himantah.png",
      review: (
        <>
          Apex Lanka company absolutely nailed it! Their
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            <span style={{ whiteSpace: "nowrap" }}> maintaining</span>{" "}
          </RoughText>{" "}
          quality is top-notch, ensuring a seamless experience throughout the
          project.
        </>
      ),
    },
    {
      name: "Janidu Lashith",
      company: "Bolton & AL",
      avatar: "/janidu.png",
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
      name: "Sandeep Nnimesh",
      company: "Auto-Auctions",
      avatar: "/sandeep.png",
      review: (
        <>
          We've had an amazing experience with Apex Lanka—excellent
          communication,{" "}
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

  // I disabled the next button for now, but you can enable it later
  // by uncommenting the onClick handler
  // const goToNext = () => {
  //   setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  // };

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
          <RoughText
            type="underline"
            color="#a365ff"
            strokeWidth={1}
            padding={2}
            iterations={1}
          >
            {" "}
            <span style={{ whiteSpace: "nowrap" }}>
              {" "}
              Your success is our success
            </span>
          </RoughText>
          . We are committed to helping you achieve your goals and exceed your
          expectations.
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
            // onClick={goToNext}
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
