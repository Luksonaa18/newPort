"use client";
import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            className="w-full bg-[rgb(40, 39, 39)] text-white p-6 "
            initial={{ opacity: 0 }}   // Initial state: hidden
            animate={{ opacity: 1 }}    // Animate to fully visible
            transition={{ duration: 0.5, ease: "easeOut" }}  // Transition properties
        >
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}  // Add delay for smooth fade
            >
                <motion.p
                    initial={{ opacity: 0, y: 10 }}  // Slide up with opacity
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}   // Smooth transition
                    className="mb-4 text-lg"
                >
                    © 2025 Your Portfolio. All Rights Reserved.
                </motion.p>

                <motion.ul
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}  // Fade in with delay
                >
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }} // Delay stagger for each item
                        whileHover={{ scale: 1.1 }} // Hover scaling effect
                    >
                        <a href="#home" className="text-lg">Home</a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="#contact" className="text-lg">Contact</a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="#about" className="text-lg">About</a>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href="#projects" className="text-lg">Projects</a>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
