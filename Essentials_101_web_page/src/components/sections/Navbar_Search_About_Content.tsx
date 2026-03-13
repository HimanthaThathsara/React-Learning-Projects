"use client";
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarSearchAboutContentProps {
    isSearchOpen: boolean;
    isAboutOpen: boolean;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    contentVariants: Variants;
}

export default function NavbarSearchAboutContent({
    isSearchOpen,
    isAboutOpen,
    searchQuery,
    setSearchQuery,
    contentVariants
}: NavbarSearchAboutContentProps) {
    return (
        <>
            {/* Expandable Content Area - Appears below the shared row */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        key="search-content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden border-b border-[#333333]"
                    >
                        <div className="pb-4 pt-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent text-white text-[24px] placeholder-[#333333] border-none focus:outline-none focus:ring-0 px-0"
                                placeholder="Type to search..."
                                autoFocus
                            />
                        </div>
                    </motion.div>
                )}

                {isAboutOpen && (
                    <motion.div
                        key="about-content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden border-b border-[#333333]"
                    >
                        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#808080] leading-relaxed">
                            <div>
                                <p className="text-white mb-6">The Foundation of Everything in System and Security Engineering.</p>
                                <p className="mb-4">
                                    Curated by Himantha Thathsara, Systems Engineer and Security Specialist at <a href="/" target="_blank" rel="noreferrer" className="text-white underline hover:font-bold hover:text-white">Essentials 101</a>. Himantha's personal work and projects can be viewed at <a href="https://github.com/HimanthaThathsara?tab=repositories" target="_blank" rel="noreferrer" className="text-white underline hover:font-bold hover:text-white">github.com/HimanthaThathsara</a>.
                                </p>
                                <p className="mb-4">
                                    In a digital landscape overflowing with complexity, Essentials 101 was created to distill the fundamental principles of system engineering and security. Whether you're an experienced architect or a student just beginning your journey, this platform serves as a comprehensive resource for anyone who values robust, secure, and scalable systems.
                                </p>
                                <p>
                                    What truly sets Essentials 101 apart is our commitment to clarity and practical application. <span className="text-white italic">"If it's essential, it's here."</span> This deliberate approach ensures that only the most critical concepts, best practices, and proven methodologies make it onto the platform—empowering engineers to build systems that are both resilient and secure.
                                </p>
                            </div>
                            <div>
                                <div className="mb-6">
                                    <p className="text-white mb-1">Submissions</p>
                                    <a href="mailto:gmail" className="hover:text-white transition-colors hover:font-bold underline">Submit@visuelle.co.uk</a>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white w-fit hover:font-bold underline">Instagram</a>
                                    <a href="https://www.threads.net/" target="_blank" rel="noreferrer" className="hover:text-white w-fit hover:font-bold underline">Threads</a>
                                    <a href="https://uk.pinterest.com/" target="_blank" rel="noreferrer" className="hover:text-white w-fit hover:font-bold underline">Pinterest</a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white w-fit hover:font-bold underline">YouTube</a>
                                    <a href="https://vimeo.com/" target="_blank" rel="noreferrer" className="hover:text-white w-fit hover:font-bold underline">Vimeo</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
