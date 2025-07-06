"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Icons
import javascript from "@/public/javascript-colored.svg";
import css from "@/public/css3-colored.svg";
import react from "@/public/react-colored.svg";
import typescript from "@/public/typescript-colored.svg";
import vite from "@/public/vite-colored.svg";
import html from "@/public/html5-colored.svg";
import bootstrap from "@/public/bootstrap-colored.svg";
import mui from "@/public/materialui-colored.svg";
import mongodb from "@/public/mongodb-colored.svg";
import nodejs from "@/public/nodejs-colored.svg";

const skills = [
  { src: html, alt: "HTML5" },
  { src: css, alt: "CSS3" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: vite, alt: "Vite" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: mui, alt: "Material UI" },
  { src: nodejs, alt: "Node.js" },
  { src: mongodb, alt: "MongoDB" },
];

const Content = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-20 p-10 mt-20 '>
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className='text-4xl font-extrabold text-white mb-2'>
          HEY, I'M <span className="text-blue-600">LUKAS</span>
        </h1>
        <p className='text-xl text-white font-medium mb-2'>Web Developer</p>
        <p className='font-semibold text-white mb-4'>
          I'm an 18-year-old passionate web developer who thrives on solving problems and building beautiful, functional websites.
        </p>
        <p className='text-white font-medium mb-2'>
          I started with frontend development and now I'm diving deeper into the backend — currently learning technologies like Node.js, Express, and working with databases like MongoDB and PostgreSQL.
        </p>
        <p className='text-white font-medium mb-6'>
          I enjoy turning ideas into reality with code, and I'm always looking to learn and collaborate with others in the tech community.
        </p>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-white text-xl font-bold mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 md:w-14 md:h-14"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Placeholder Section */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut', delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className='shadow-lg rounded-lg bg-gray-400 w-70 h-60'
      >

      </motion.div>
    </div>
  );
};

export default Content;
