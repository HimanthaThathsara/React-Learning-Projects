"use client";
import React from 'react';

interface NavbarSearchAboutProps {
    isSearchOpen: boolean;
    isAboutOpen: boolean;
    handleSearchToggle: () => void;
    handleAboutToggle: () => void;
}

export default function NavbarSearchAbout({
    isSearchOpen,
    isAboutOpen,
    handleSearchToggle,
    handleAboutToggle
}: NavbarSearchAboutProps) {
    return (
        <>
            <button
                onClick={handleSearchToggle}
                className={`py-2 transition-colors duration-200 hover:text-white text-left hover:font-bold 
                    ${isSearchOpen ? 'text-white' : 'text-[#808080]'}
                    `}
            >
                {/* Search Trigger (Left) */}
                Search {isSearchOpen && <span className="text-[12px] ml-1">✕</span>}
            </button>

            {/* About Trigger (Right) */}
            <button
                onClick={handleAboutToggle}
                className={`py-2 transition-colors duration-200 hover:text-white text-right hover:font-bold
                     ${isAboutOpen ? 'text-white' : 'text-[#808080]'}
                  `}
            >
                {isAboutOpen ? 'Close' : 'About'}
            </button>
        </>
    );
}
