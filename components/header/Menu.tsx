import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose, IoMenu } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const redirect = useRouter()

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
                    <>

                        <motion.div
                            key="menu"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            className="w-full h-screen bg-white absolute top-0 left-0 z-50 flex p-6 items-center"

                        >
                            <div className='absolute top-0 right-0 p-6'>
                                <IoClose className='text-2xl cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
                            </div>

                            <ul className="space-y-6 text-start">
                                <li className='cursor-pointer text-2xl font-bold text-slate-900'>Home</li>
                                <li className='cursor-pointer text-2xl font-bold text-slate-900'>Contact</li>
                                <li className='cursor-pointer text-2xl font-bold text-slate-900'>About</li>
                                <li className='cursor-pointer text-2xl font-bold text-slate-900'>Projects</li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Menu
