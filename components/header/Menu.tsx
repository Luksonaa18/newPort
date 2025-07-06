import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose, IoMenu } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])

    return (
        <>
            <button
                onClick={() => setOpen(prev => !prev)}
                className="p-2 text-2xl text-white"
                aria-label="Toggle menu"
            >
                <IoMenu className='cursor-pointer' />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="w-full h-screen bg-white fixed top-0 left-0 z-50 flex p-6 items-center"
                    >
                        <div className='absolute top-0 right-0 p-6'>
                            <IoClose
                                className='text-2xl cursor-pointer'
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        <div className="flex flex-col w-full items-start space-y-6">
                            <motion.ul
                                className="flex flex-col justify-center gap-6 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                            >
                                {["home", "contact", "about", "projects"].map((section, i) => (
                                    <motion.li
                                        key={section}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        className='font-bold'
                                    >
                                        <a
                                            href={`#${section}`}
                                            className="text-lg"
                                            onClick={() => setOpen(false)}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Social Media Icons */}
                            <motion.div
                                className="flex justify-center gap-6 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                            >
                                <motion.a
                                    href="https://github.com/Luksonaa18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-2xl text-slate-900"
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/luka-zhozhadze-143259341/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-2xl text-slate-900"
                                >
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/lukssonaa1122/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-2xl text-slate-900"
                                >
                                    <FaInstagram />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Menu
