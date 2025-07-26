import React from "react";
import { motion } from "framer-motion";
import Classes from "./SuccessPopup.module.css";
import { usePreventScrolling } from "../../Hooks/usePreventScrolling";
import RoughText from "../../components/RoughText/RoughText";

export default function SuccessPopup({ handleClose, name }) {
  // Prevent scrolling in background
  usePreventScrolling();

  const handleBgClick = () => {
    // If you want the background click to close, uncomment:
    handleClose();
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={Classes.popup}
      onClick={handleBgClick}
    >
      <motion.div
        initial={{ y: 30, scale: 0.97, opacity: 0.2 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 30, scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={Classes.card}
        onClick={handleCardClick}
      >
        <div className={Classes.header}>
          <div className="flexAlign10"></div>
          <div className={Classes.title}>
            <h2>
              <span>
                <RoughText
                  type="underline"
                  color="white"
                  strokeWidth={1}
                  padding={2}
                  iterations={1}
                >
                  Thank you!
                </RoughText>
              </span>
            </h2>
          </div>
          <div className={Classes.flexEnd}>
            <div className={Classes.closeBtn} onClick={handleClose}>
              <svg
                fill="#555f91"
                height="22px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 7.293a1 1 0 011.414 0L16 14.586l7.293-7.293a1 1 0 011.414 1.414L17.414 16l7.293 7.293a1 1 0 01-1.414 1.414L16 17.414l-7.293 7.293a1 1 0 01-1.414-1.414L14.586 16 7.293 8.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={Classes.body}>
          <h5>
            Dear {name}, <br />
            <br />
            Your form has been submitted successfully! 🎉 We truly appreciate
            your time and are excited to learn more about your project. Our team
            will review your requirements and get in touch with you shortly.
            <br /> <br />
            Rest assured, your ideas are safe with us, and we’re eager to bring
            them to life. If you have any questions in the meantime, feel free
            to reach out at{" "}
            <a href="mailto:ApexLanka@gmail.com">ApexLanka@gmail.com</a>
          </h5>
          <div className={Classes.btnCon}>
            <button className={Classes.btn} onClick={handleClose}>
              <h5>Sounds good!</h5>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
