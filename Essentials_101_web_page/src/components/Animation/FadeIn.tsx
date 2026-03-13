"use client";

import { motion, Variants } from "framer-motion";

export function Animation({ children }: { children: React.ReactNode }) {

    const menuVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={menuVariants} className="overflow-hidden">
            {children}
        </motion.div>
    );
}
