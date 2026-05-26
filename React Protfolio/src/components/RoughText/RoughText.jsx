"use client";
import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const RoughText = ({ children, type = "underline", color = "#FF5733", strokeWidth = 2, padding = 5, iterations = 2, delay = 500 }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const annotation = annotate(textRef.current, {
                type,
                color,
                strokeWidth,
                padding,
                iterations,
            });

            setTimeout(() => {
                annotation.show();
            }, delay);
        }
    }, [type, color, strokeWidth, padding, iterations, delay]);

    return <span ref={textRef}>{children}</span>;
};

export default RoughText;
