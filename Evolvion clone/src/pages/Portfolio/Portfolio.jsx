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
  ({ theme, bgColor, textColor, arrowColor }) => ({
    "& .MuiPaginationItem-root": {
      backgroundColor: bgColor || "transparent",
      color: textColor || theme.palette.text.primary,
    },
    "& .MuiPagination-ul": {
      gap: "7px",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: textColor || theme.palette.primary.main,
      color: bgColor || "#fff",
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
    link: "https://www.evala.ai/",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/evala/thumbnail2.jpg",
    images: [
      "/ourprojects/evala/1.webp",
      "/ourprojects/evala/2.png",
      "/ourprojects/evala/3.png",
      "/ourprojects/evala/4.png",
      "/ourprojects/evala/5.png",
      "/ourprojects/evala/6.png",
      "/ourprojects/evala/7.png",
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
    name: "Pitchperfecter.ai",
    title: "Pitchperfecter.ai | Instant pitch deck feedback",
    link: "https://www.pitchperfecter.ai/",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/pitchperfect/thumbnail.jpg",
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
  // {
  //     id: 3,
  //     name: 'Spectrum',
  //     title: 'Spectrum | Hospital Management System',
  //     link: 'https://srehan-spectrum.surge.sh/',
  //     industry: 'Healthcare',
  //     projectType: 'Web App',
  //     features: ['Payment Integration'],
  //     thumbnail: '/ourprojects/spectrum/thumbnail.png',
  //     images: [
  //         '/ourprojects/spectrum/1.png',
  //         '/ourprojects/spectrum/2.jpg',
  //         '/ourprojects/spectrum/3.jpg',
  //         '/ourprojects/spectrum/4.png',
  //         '/ourprojects/spectrum/5.png',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'JavaScript', 'Figma', 'VantaJS'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 This project aims to streamline hospital operations and improve patient care by providing
  //                 a robust and user-friendly platform for managing various aspects of hospital
  //                 administration. The Spectrum HMS website includes a dynamic dashboard that offers a
  //                 comprehensive overview of hospital operations. This feature displays key metrics and
  //                 insights, enabling administrators to monitor the hospital's performance in real-time.
  //             </p>
  //             <br />
  //             <p>
  //                 The diary module is designed to streamline scheduling and managing appointments for
  //                 doctors and patients. It provides an intuitive interface for viewing and managing daily
  //                 schedules, reducing the chances of double-booking and missed appointments.
  //             </p>
  //         </div>
  //     ),
  // },
  {
    id: 4,
    name: "Front Dashboard",
    title: "Front Dashboard | UI/UX Conversion",
    link: "https://front-dashboard-afaq.vercel.app/",
    industry: "SaaS",
    projectType: "Web App",
    features: ["Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/dashboard/thumbnail.png",
    images: [
      "/ourprojects/dashboard/1.png",
      "/ourprojects/dashboard/2.png",
      "/ourprojects/dashboard/3.png",
      "/ourprojects/dashboard/4.png",
      "/ourprojects/dashboard/5.png",
    ],
    skills: [
      "ReactJS",
      "Redux",
      "Html",
      "CSS",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          We transformed an inspired Figma design into a comprehensive React.js
          dashboard, providing an organized interface for user management,
          e-commerce tracking, account profiles, project authorization, API
          documentation, file management, and invoice generation.
        </p>
        <br />
        <p>
          Key features include a user management system with role-based access
          controls, e-commerce insights, customizable user profiles, API key
          management with documentation, and a file manager supporting
          drag-and-drop uploads. The dashboard also has an invoice generator
          with downloadable PDFs. I focused on responsive design, optimized UX
          with intuitive layouts and transitions, and integrated APIs to ensure
          real-time updates across modules. By leveraging Redux.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    name: "Auto Auctions",
    title: "Auto Auctions | Buy/Sell luxury cars",
    link: null,
    industry: "SaaS",
    projectType: "Web App",
    features: ["Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/auto/thumbnail.webp",
    images: [
      "/ourprojects/auto/1.webp",
      "/ourprojects/auto/2.webp",
      "/ourprojects/auto/3.webp",
      "/ourprojects/auto/4.webp",
    ],
    skills: [
      "ReactJS",
      "NodeJS",
      "WebSocket",
      "ExpressJS",
      "Cloudinary",
      "Html",
      "CSS",
      "JavaScript",
      "Figma",
      "VantaJS",
    ],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          This is a user-friendly web application for Auto Auctions UK, designed
          to connect buyers and sellers in the car auction space. The platform
          features a robust search and filter system, enabling users to quickly
          find their desired vehicles based on criteria like make, model, year,
          and price range.
          <br />
          <br />
          Key features include: <br />
          Listings: Multi-user, Multi admin listings with essential information,
          including bid count, time remaining, location, and car specifications.
          Seller Services: "Sell My Car" feature offers free listing services,
          professional photography, and Consigment form system. Bidding System:
          A transparent and fair bidding system where users can view bids and
          participate confidently, knowing each vehicle is HPI checked.
        </p>
      </div>
    ),
  },
  // {
  //     id: 6,
  //     name: 'Holorent',
  //     title: 'Holorent - Rent the Apple Vision Pro',
  //     link: 'https://holorent.netlify.app',
  //     industry: 'SaaS',
  //     projectType: 'Web App',
  //     features: ['Payment Integration', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/holorent/thumbnail.webp',
  //     images: [
  //         '/ourprojects/holorent/1.webp',
  //         '/ourprojects/holorent/2.png',
  //         '/ourprojects/holorent/3.png',
  //         '/ourprojects/holorent/4.png',
  //         '/ourprojects/holorent/5.png',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'JavaScript', 'Stripe', 'Netlify', 'Serverless production'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 Holorent is a streamlined web platform that lets users rent the Apple Vision Pro with zero
  //                 commitment. I built an intuitive booking flow where customers pick dates via an integrated
  //                 calendar, view real-time pricing (starting at 83€/day), and pay securely through Stripe.
  //                 The project also includes 24/7 premium support and fast 24–48 hour delivery, ensuring a
  //                 seamless, top-tier rental experience for mixed reality enthusiasts.
  //             </p>
  //             <br />
  //             <p>
  //                 Key features include a robust admin panel for overseeing operations, navigating customers,
  //                 payments and bookings, and an intuitive booking system for customers to easily reserve
  //                 Apple Vision Pro.
  //             </p>
  //         </div>
  //     ),
  // },
  {
    id: 7,
    name: "ZraxMedia",
    title: "Zraxmedia - Video Editing Agency Website",
    link: "",
    industry: "SaaS",
    projectType: "Web App",
    features: ["Payment Integration"],
    thumbnail: "/ourprojects/zrax/thumbnail.webp",
    images: [
      "/ourprojects/zrax/1.webp",
      "/ourprojects/zrax/2.webp",
      "/ourprojects/zrax/3.webp",
      "/ourprojects/zrax/4.webp",
    ],
    skills: ["ReactJS", "Html", "CSS", "JavaScript", "Figma", "Framer"],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          Designed and developed a single-page web application for Zrax Media, a
          video editing agency focused on helping content creators maximize
          their social media impact. The website showcases Zrax Media’s unique
          value with sections dedicated to a demo reel, recent client work (both
          long-form and short-form videos), client testimonials, and service
          information. With a clean, dark-themed design, the platform emphasizes
          Zrax Media’s professional, high-quality approach to video editing.
        </p>
        <br />
        <p>
          The site provides a streamlined user experience that highlights client
          success stories, encourages new client engagement, and invites
          visitors to join the community for additional resources and support.
        </p>
      </div>
    ),
  },
  // {
  //     id: 8,
  //     name: 'Gym/Fitness',
  //     title: 'Gym/Fitness website Mobile UI',
  //     link: null,
  //     industry: 'SaaS',
  //     projectType: 'Web App',
  //     features: ['AI Applications', 'Payment Integration', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/gym/thumbnail.png',
  //     images: [
  //         '/ourprojects/gym/1.png',
  //         '/ourprojects/gym/2.png',
  //         '/ourprojects/gym/3.png',
  //         '/ourprojects/gym/4.png',
  //         '/ourprojects/gym/5.png',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'JavaScript', 'Figma', 'Framer', 'Spline', 'VantaJS'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 We developed a series of gym web pages inspired by a modern, user-friendly design. These
  //                 pages are tailored to enhance the user experience for gym members, offering intuitive
  //                 navigation, efficient class scheduling, and seamless interaction with the gym’s services.
  //                 Below is a detailed description of the gym web pages I created.
  //             </p>
  //             <br />
  //             <p>
  //                 One of the key features of the gym website is the class scheduling page. This page allows
  //                 members to view and book fitness classes with ease. The design includes a calendar
  //                 interface where users can select the desired date and view available classes for that day.
  //                 Each class listing provides detailed information, including the class type, time,
  //                 location, and the instructor’s name. Users can quickly see how many spots are available
  //                 and book their preferred class with a single click.
  //             </p>
  //         </div>
  //     ),
  // },
  {
    id: 9,
    name: "Chickanji",
    title: "Chickanji - Restaurant Web Application",
    link: null,
    industry: "SaaS",
    projectType: "Web App",
    features: ["Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/chickanji/thumbnail.png",
    images: [
      "/ourprojects/chickanji/1.png",
      "/ourprojects/chickanji/2.png",
      "/ourprojects/chickanji/3.png",
      "/ourprojects/chickanji/4.png",
    ],
    skills: [
      "ReactJS",
      "Html",
      "CSS",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          Developed an interactive web application for TasteBites, a modern
          restaurant that provides a seamless online experience for its
          customers. The platform allows users to explore a detailed menu with
          categorized options such as appetizers, mains, desserts, and
          beverages. Each menu item includes descriptions, images, and pricing,
          with options for customization.
        </p>
        <br />
        <p>
          The application is designed for easy navigation, enabling customers to
          quickly find and order their desired dishes. Additionally, it offers
          features like online reservations, contact information, and the
          ability to view ongoing promotions. TasteBites aims to provide a
          user-friendly, informative, and engaging digital dining experience.
        </p>
      </div>
    ),
  },
  // {
  //     id: 10,
  //     name: 'Property Rental',
  //     title: 'Crem - Property Rental Marketplace Platform',
  //     link: null,
  //     industry: 'SaaS',
  //     projectType: 'Web App',
  //     features: ['Payment Integration', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/rent/thumbnail.png',
  //     images: [
  //         '/ourprojects/rent/1.png',
  //         '/ourprojects/rent/2.png',
  //         '/ourprojects/rent/3.png',
  //         '/ourprojects/rent/4.png',
  //         '/ourprojects/rent/5.png',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'JavaScript', 'Figma', 'Framer', 'Spline', 'VantaJS'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 Developed a versatile property rental platform for Crem, similar to Airbnb, where users can
  //                 list, rent, and manage residential properties. The platform includes comprehensive
  //                 interfaces for both tenants and property owners, with functionalities for listing
  //                 properties, managing bookings, and secure transactions.
  //             </p>
  //             <br />
  //             <p>
  //                 Key features include a robust admin panel for overseeing operations, an image gallery to
  //                 showcase properties, and an intuitive booking system for tenants to easily reserve stays.
  //                 Crem’s user-friendly design ensures a smooth experience for renters and property managers
  //                 alike, simplifying short- and long-term property rentals.
  //             </p>
  //         </div>
  //     ),
  // },
  {
    id: 11,
    name: "Aussie Amped",
    title: "Aussie Amped | Concert Booking Online",
    link: "",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/concert/thumbnail.png",
    images: [
      "/ourprojects/concert/1.webp",
      "/ourprojects/concert/2.webp",
      "/ourprojects/concert/3.png",
      "/ourprojects/concert/4.png",
      "/ourprojects/concert/5.png",
    ],
    skills: [
      "ReactJS",
      "Html",
      "CSS",
      "JavaScript",
      "Figma",
      "Framer",
      "Spline",
      "VantaJS",
    ],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          Developed an immersive music concert booking platform, AussieAmped,
          where users can discover, explore, and book tickets for live concerts
          featuring top artists. The platform showcases a curated list of
          artists and upcoming concerts, complete with event details, ticket
          prices, and a visual gallery. Users can view event descriptions,
          rules, and venue information, as well as add events to their calendar.
        </p>
        <br />
        <p>
          The platform includes an interactive comment section for users to
          share their excitement and connect with other fans. Additional
          features include an "Other Events You May Like" section and a
          personalized account dashboard. This user-centric platform provides a
          seamless experience for booking tickets to live music events across
          Australia.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    name: "Novassor",
    title: "Novassor | Smart Laundry System",
    link: "https://novassor.vercel.app/",
    industry: "SaaS",
    projectType: "Web App",
    features: ["AI Applications", "Payment Integration", "Real-time Chat"],
    thumbnail: "/ourprojects/novassor/thumbnail.webp",
    images: [
      "/ourprojects/novassor/1.webp",
      "/ourprojects/novassor/2.png",
      "/ourprojects/novassor/3.webp",
    ],
    skills: ["ReactJS", "Html", "CSS", "JavaScript", "Figma", "Framer"],
    date: "Jan, 2024",
    description: (
      <div className="mb10">
        <p>
          Maximize your property’s value with our smart laundry solution and
          boost revenue through intelligent washing machine rentals. Our
          energy-efficient technology and hassle-free service deliver
          convenience for tenants while increasing profitability for property
          owners—an all-in-one solution for modern, cost-effective laundry
          management.
        </p>
        <br />
        <p>
          Key features include a robust admin panel for overseeing operations,
          navigating customers, payments and bookings, and an intuitive booking
          system for customers to easily reserve washing machines.
        </p>
      </div>
    ),
  },
  // {
  //     id: 13,
  //     name: 'TacticalCentre',
  //     title: 'TacticalCentre | web-based 2D tool for soccer coaches',
  //     link: null,
  //     industry: 'SaaS',
  //     projectType: 'Web App',
  //     features: ['AI Applications', 'Payment Integration', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/tactical/thumbnail.webp',
  //     images: [
  //         '/ourprojects/tactical/1.webp',
  //         '/ourprojects/tactical/2.webp',
  //         '/ourprojects/tactical/3.webp',
  //         '/ourprojects/tactical/4.webp',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'Canvas', 'JavaScript', 'Figma'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 TacticalCentre is a web-based 2D tool designed for soccer coaches to create, visualize, and
  //                 refine drills on a digital canvas. It offers an intuitive interface for drawing out
  //                 formations and plays, ensuring an accurate, practical experience for teams and individual
  //                 learners.
  //             </p>
  //             <br />
  //             <p>
  //                 Beyond simply sketching drills, TacticalCentre includes a PDF export feature for sharing
  //                 and printing, as well as a robust club management system that supports multiple coaches
  //                 collaborating under a single club. This streamlined approach makes drill creation
  //                 efficient, accessible, and fully scalable for teams of any size.
  //             </p>
  //         </div>
  //     ),
  // },
  // {
  //     id: 14,
  //     name: 'Madmen',
  //     title: 'Madmen | AI Web Application',
  //     link: 'https://madmen-bot.vercel.app/',
  //     industry: 'SaaS',
  //     projectType: 'AI Chatbot',
  //     features: ['AI Applications', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/madmen/thumbnail.png',
  //     images: [
  //         '/ourprojects/madmen/1.png',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'Canvas', 'JavaScript', 'Figma'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 We have developed an advanced AI-driven application using the latest technologies,
  //                 including ChatGPT 4.0. This cutting-edge solution offers a range of features such as
  //                 document editing and saving, chat creation, and much more.
  //             </p>
  //             <br />
  //             <p>
  //                 Our application represents the forefront of AI technology,
  //                 providing users with a powerful tool for document management and communication.
  //             </p>
  //         </div>
  //     ),
  // },
  // {
  //     id: 15,
  //     name: 'AI GPT',
  //     title: 'AI GPT | AI Web Application',
  //     link: null,
  //     industry: 'SaaS',
  //     projectType: 'AI Chatbot',
  //     features: ['AI Applications', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/gptassist/thumbnail.webp',
  //     images: [
  //         '/ourprojects/gptassist/1.webp',
  //         '/ourprojects/gptassist/2.webp',
  //         '/ourprojects/gptassist/3.webp',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'Canvas', 'JavaScript', 'Figma'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 We have developed an advanced AI-driven application using the latest technologies,
  //                 including ChatGPT 4.0. This cutting-edge solution offers a range of
  //                 features such as document editing and saving, chat creation, and much more.
  //             </p>
  //             <br />
  //             <p>
  //                 Our application represents the forefront of AI technology, providing users
  //                 with a powerful tool for document management and communication.
  //             </p>
  //         </div>
  //     ),
  // },
  // {
  //     id: 16,
  //     name: 'Shouty',
  //     title: 'Shouty | Personalized Celebrity Video Messages',
  //     link: 'https://shouty.vercel.app/',
  //     industry: 'SaaS',
  //     projectType: 'Web App',
  //     features: ['AI Applications', 'Real-time Chat'],
  //     thumbnail: '/ourprojects/shouty/thumbnail.webp',
  //     images: [
  //         '/ourprojects/shouty/1.webp',
  //     ],
  //     skills: ['ReactJS', 'Html', 'CSS', 'Canvas', 'JavaScript', 'Figma'],
  //     date: 'Jan, 2024',
  //     description: (
  //         <div className="mb10">
  //             <p>
  //                 Connect with your favorite stars and request personalized video messages for any occasion.
  //                 Thousands of celebrities are just a click away!
  //             </p>
  //             <br />
  //             <p>
  //                 Our application represents the forefront of AI technology, providing users
  //                 with a powerful tool for management and communication.
  //             </p>
  //         </div>
  //     ),
  // },
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evolvion.io/portfolio" />
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
                    bgColor="#222"
                    textColor="#fff"
                    arrowColor="white"
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
