"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function JitterSplashCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    // Position of the actual mouse
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics for the outer ring
    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Detect if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.cursor-pointer') ||
                target.tagName === 'IFRAME';

            setIsHovering(!!isClickable);
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* 1. THE INNER DOT (Immediate) */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FFC62A] rounded-full pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* 2. THE OUTER RING (Delayed/Springy) */}
            <motion.div
                className="fixed top-0 left-0 border border-[#FFC62A] rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    width: isHovering ? 60 : 30,
                    height: isHovering ? 60 : 30,
                    backgroundColor: isHovering ? "rgba(255, 198, 42, 0.1)" : "rgba(255, 198, 42, 0)",
                    scale: isMouseDown ? 0.8 : 1,
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Global CSS to hide the default cursor on the whole site */}
            <style jsx global>{`
        body, a, button, input, textarea, select {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          .fixed { display: none !important; }
          body, a, button, input, textarea, select { cursor: auto !important; }
        }
      `}</style>
        </>
    );
}
