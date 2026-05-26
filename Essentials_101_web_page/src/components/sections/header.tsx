'use client';

import { useState } from 'react';
import { Doto } from "next/font/google";
import { Variants } from 'framer-motion';
import Logo from './Logo';
import Navbar from './Navbar';
import NavbarSearchAbout from './Navbar_Search_About';
import NavbarSearchAboutContent from "./Navbar_Search_About_Content";

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,

});

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isAboutOpen) setIsAboutOpen(false);
  };

  const handleAboutToggle = () => {
    setIsAboutOpen(!isAboutOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const contentVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <header className={`w-full bg-black text-white font-sans text-[16px] ${doto.className}`}>
      <div className="container mx-auto px-5 md:px-[40px] max-w-[1800px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 pt-[40px] pb-10">
          <Logo />

          {/* Navigation Column */}
          <div className="col-span-1 md:col-span-9 ml-[13%]">
            <nav className="flex flex-col w-full">
              <Navbar />

              {/* Spacer */}
              <div className="h-[20px]"></div>

              {/* Search & About Trigger Row */}
              <div className="flex justify-between items-center bg-black relative z-10">
                <NavbarSearchAbout
                  isSearchOpen={isSearchOpen}
                  isAboutOpen={isAboutOpen}
                  handleSearchToggle={handleSearchToggle}
                  handleAboutToggle={handleAboutToggle}
                />
              </div>


              {/* Expandable Content Component */}
              <NavbarSearchAboutContent
                isSearchOpen={isSearchOpen}
                isAboutOpen={isAboutOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                contentVariants={contentVariants}
              />
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}