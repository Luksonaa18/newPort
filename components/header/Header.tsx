"use client";
import { motion } from "framer-motion";
import Menu from './Menu';

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    whileHover: { y: -2 }
};

const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

const Header = () => {
    return (
        <header id="home" className="h-17 fixed w-full bg-black z-100 lg-shadow">
            {/* Mobile Navbar */}
            <nav className="lg:hidden flex flex-row items-center justify-between p-4">
                <motion.h1
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-bold text-xl text-white"
                >
                    Luka zh
                </motion.h1>
                <Menu />
            </nav>
            <nav className="hidden lg:flex items-center justify-between p-4">
                <motion.h1
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-bold text-xl text-white"
                >
                    Portfolio
                </motion.h1>

                <motion.ul
                    className="flex gap-5 mr-2"
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                >
                    <motion.li
                        variants={itemVariants}
                        whileHover={itemVariants.whileHover}
                        className="cursor-pointer text-lg font-semibold text-white"
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={itemVariants.whileHover}
                        className="cursor-pointer text-lg font-semibold text-white"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={itemVariants.whileHover}
                        className="cursor-pointer text-lg font-semibold text-white"
                        onClick={() => scrollToSection('top')}
                    >
                        About
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        whileHover={itemVariants.whileHover}
                        className="cursor-pointer text-lg font-semibold text-white"
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
};

export default Header;
