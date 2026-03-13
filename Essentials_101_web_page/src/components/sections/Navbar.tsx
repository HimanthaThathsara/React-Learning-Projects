"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Animation } from '@/components/Animation/FadeIn';
import { navbar_list } from '@/data/Navbar';

export default function Navbar() {

    const [activeFilter, setActiveFilter] = useState('All');
    const categories = navbar_list[0];

    return (
        <>
            {categories.map((category: string, i: number) => (
                <Animation key={category}>
                    <motion.button
                        onClick={() => setActiveFilter(category)}
                        initial={false}
                        whileHover="hover"
                        animate="rest"
                        variants={{
                            rest: {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                color: activeFilter === category ? "#FFFFFF" : "#808080",
                                border: "1px solid #333333 border-b",
                                transition: { duration: 0.5, delay: 0.1 } // 4s delay before fading back
                            },
                            hover: {
                                backgroundColor: "#808080",
                                color: "#FFFFFF",
                                border: "1px solid #ffff border-b",
                                fontWeight: "bold",
                                transition: { duration: 0 } // Instant on hover
                            }
                        }}
                        className={`w-full text-left py-1 border-b border-[#333333] transition-none 
                      ${activeFilter === category ? 'text-white' : 'text-[#808080]'}
                    `}
                    >
                        {category}
                    </motion.button>
                </Animation>
            ))}
        </>
    );
}