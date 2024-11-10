"use client";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectDetailPageProps {
  img: string | StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  img,
  title,
  description,
  technologies,
  projectLink,
  githubLink
}) => {
  return (
    <div className="bg-black text-white mt-10 h-full w-full min-h-screen py-10 md:py-20 px-4 md:px-10 lg:px-20 flex flex-col justify-between">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-400 mb-4">{description}</p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-4">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-red-600 text-white px-3 py-2 rounded-full text-sm md:text-base mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            className="w-full md:w-1/3 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={img}
              alt="Project Image"
              width={500}
              height={500}
              layout="responsive"
              className="rounded-[28px] shadow-xl object-cover"
            />
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
          <Link
            href={projectLink}
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-[28px] text-lg text-center transition duration-300"
          >
            View Live Project
          </Link>
          <Link 
            href={githubLink}
            className="bg-red-600 flex items-center justify-center hover:bg-gray-600 text-white p-3 rounded-full transition duration-300"
          >
            <FaGithub className="w-10 text-center h-6" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
