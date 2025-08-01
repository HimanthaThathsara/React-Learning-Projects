import React from "react";
import { motion } from "framer-motion";
import classes from "./Services.module.css";

export default function MyScrollingServices() {
  // Original items

  //    "API Development",
  //     "Web Development",
  //     "Mobile App Development",
  //     "Real-time Applications",
  //     "Blockchain Development",
  //     "WebAssembly Development",
  //     "Microservices Architecture",
  //     "Cross-Platform Development",
  //     "Voice User Interface (VUI)",
  //     "Custom Software Development",
  //     "Web Applications Development",
  //     "Virtual Reality (VR) Solutions",
  //     "Single Page Applications (SPA)",
  //     "Content Delivery Networks (CDN)",
  //     "Augmented Reality (AR) Solutions",
  //     "Internet of Things (IoT) Solutions",

  // "E-commerce Solutions",
  // "Social Media Integration",
  // "Content Management Systems",

  // "Responsive Design",
  // "Progressive Web Apps",
  // "Accessibility Compliance",
  // "Cross-Browser Compatibility",

  // "SEO Services",
  // "Website Maintenance",
  // "Performance Optimization",

  // "Security Audits",
  // "Consulting Services",
  // "Enterprise Solutions",
  // "Training and Supports",
  // "Accessibility Training",
  // "Web Application Security",
  // "Web Security Solutions",

  // "Cloud Solutions",
  // "DevOps Services",
  // "Web Hosting Solutions",
  // "Scalability Solutions",
  // "Performance Monitoring",

  // "Web Analytics Setup",
  // "Progressive Enhancement",
  // "Performance Benchmarking",

  const services = [
    "UI/UX Design",
    "Front-End Development",
    "Back-End Development",

    "Web Development",
    "Mobile App Development",
    "Real-time Applications",
    "Cross-Platform Development",
    "Custom Software Development",
    "Web Applications Development",
    "Single Page Applications (SPA)",

    "Security Audits",
    "Consulting Services",
    "Enterprise Solutions",
    "Training and Supports",
    "Accessibility Training",
    "Web Application Security",
    "Web Security Solutions",

    "Cloud Solutions",
    "DevOps Services",
    "Web Hosting Solutions",
    "Scalability Solutions",
    "Performance Monitoring",

    "Web Analytics Setup",
    "Progressive Enhancement",
    "Performance Benchmarking",

    "SEO Services",
    "Website Maintenance",
    "Performance Optimization",
  ];

  // Duplicate array for seamless scrolling
  const repeatedServices = [...services, ...services];

  // Height of each text row
  const ITEM_HEIGHT = 40;
  // Total height of the original list
  const singleListHeight = services.length * ITEM_HEIGHT;

  return (
    <div className={classes.marqueeWrapper}>
      {/* This motion div animates from y=0 to y=-singleListHeight and loops */}
      <motion.div
        className={classes.marqueeContent}
        animate={{ y: [0, -singleListHeight] }}
        transition={{
          duration: 40, // Adjust speed (larger = slower)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedServices.map((item, i) => (
          <div key={i} className={classes.marqueeItem}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
