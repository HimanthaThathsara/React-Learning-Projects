import React from 'react';
import { motion } from 'framer-motion';

export default function BottomToTop({
    children,
    fromY = 50,        // Starting Y offset (positive means below; negative means above)
    toY = 0,           // Ending Y offset
    fromOpacity = 0,   // Starting opacity
    toOpacity = 1,     // Ending opacity
    duration = 0.5,    // Animation duration in seconds
    ease = 'easeInOut',// Easing function
    delay = 0          // Delay before animation starts
}) {
    return (
        <motion.div
            initial={{ y: fromY, opacity: fromOpacity }}
            animate={{ y: toY, opacity: toOpacity }}
            transition={{
                duration,
                ease,
                delay
            }}
        >
            {children}
        </motion.div>
    );
}
