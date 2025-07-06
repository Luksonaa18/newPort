"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import facebook from "@/public/Opera Snapshot_2025-07-06_144037_facebook-ashy-ten.vercel.app-front.png";
import facebook1 from "@/public/Opera Snapshot_2025-07-06_144533_facebook-ashy-ten.vercel.app-left.png";

type ProjectProps = {
  name: string;
  image: any;
  image1?: any;
  description: string;
  id: string;
};

const Projects = () => {
  const [projects] = useState<ProjectProps[]>([
    {
      name: "Facebook Clone",
      image: facebook,
      image1: facebook1,
      description:
        "Created a Facebook clone with Firebase authentication and real-time data features.",
      id: "1",
    },
    {
      name: "Twitter Clone",
      image: facebook,
      image1: facebook1,
      description:
        "Developed a Twitter clone with posting, likes, and Firebase auth integration.",
      id: "2",
    },
    {
      name: "Art Gallery",
      image: facebook,
      image1: facebook1,
      description:
        "One of my earliest projects, showing growth over time. A reminder to be proud of your journey.",
      id: "3",
    },
    {
      name: "Art Gallery",
      image: facebook,
      image1: facebook1,
      description:
        "One of my earliest projects, showing growth over time. A reminder to be proud of your journey.",
      id: "3",
    },
    {
      name: "Art Gallery",
      image: facebook,
      image1: facebook1,
      description:
        "One of my earliest projects, showing growth over time. A reminder to be proud of your journey.",
      id: "3",
    },
    {
      name: "Art Gallery",
      image: facebook,
      image1: facebook1,
      description:
        "One of my earliest projects, showing growth over time. A reminder to be proud of your journey.",
      id: "3",
    },
  ]);

  return (
    <section id="projects" className="py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 rounded-lg shadow-lg p-5 border border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Preview */}
            {(proj.image || proj.image1) && (
              <div className="flex gap-3 mb-4">
                {proj.image && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-2/3 rounded overflow-hidden"
                  >
                    <Image
                      src={proj.image}
                      alt={`${proj.name} desktop`}
                      className="object-cover w-full h-auto rounded-md"
                      placeholder="blur"
                    />
                  </motion.div>
                )}
                {proj.image1 && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-1/3 rounded overflow-hidden"
                  >
                    <Image
                      src={proj.image1}
                      alt={`${proj.name} mobile`}
                      className="object-cover w-full h-auto rounded-md"
                      placeholder="blur"
                    />
                  </motion.div>
                )}
              </div>
            )}

            {/* Text Content */}
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="text-gray-300 text-sm">{proj.description}</p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 mt-5 px-4 py-2 text-sm font-semibold rounded-lg"
            >
              Visit Website
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
