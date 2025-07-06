"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from next/link
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
    return (
        <motion.footer
            className="w-full bg-[rgb(40, 39, 39)] text-white p-6"
            initial={{ opacity: 0 }} // Initial state: hidden
            animate={{ opacity: 1 }} // Animate to fully visible
            transition={{ duration: 0.3, ease: "easeOut" }} // Transition properties
        >
            <motion.div
                className="container mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }} // Add delay for smooth fade
            >
                <motion.p
                    initial={{ opacity: 0, y: 10 }} // Slide up with opacity
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }} // Smooth transition
                    className="mb-4 text-lg"
                >
                    © 2025 Your Portfolio. All Rights Reserved.
                </motion.p>

                <motion.ul
                    className="flex justify-center gap-6 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }} // Fade in with delay
                >
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }} // Delay stagger for each item
                        whileHover={{ scale: 1.1 }} // Hover scaling effect
                    >
                        <Link href="#home" className="text-lg">Home</Link>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link href="#contact" className="text-lg">Contact</Link>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link href="#about" className="text-lg">About</Link>
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link href="#projects" className="text-lg">Projects</Link>
                    </motion.li>
                </motion.ul>

                {/* Social Media Icons */}
                <motion.div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }} // Delay for smooth fade-in
                >
                    <motion.a
                        href="https://github.com/Luksonaa18"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }} // Hover scaling effect
                        className="text-xl"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/luka-zhozhadze-143259341/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="text-xl"
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/lukssonaa1122/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="text-xl"
                    >
                        <FaInstagram />
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
