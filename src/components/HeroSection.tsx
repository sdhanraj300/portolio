"use client"
import Image from 'next/image';
import React from 'react';
import img from '../assets/coder.avif';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <motion.div
            className="min-h-screen z-0 h-screen bg-gradient-to-b from-black to-black/95 flex flex-col md:flex-row items-center justify-center relative text-white p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <motion.div
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2 z-10"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Welcome! I&apos;m <span className="text-red-600">Dhanraj Singh</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300">
                    I&apos;m a passionate Full Stack Web Developer specializing in building exceptional web applications using
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md mx-1">NextJs</span>,
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md mx-1">ReactJs</span>,
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md mx-1">NodeJs</span>, and
                    <span className="bg-red-600 text-white px-2  py-1 rounded-md mx-1">MongoDB</span>.
                </p>
                <div className="flex space-x-4">
                    <Link href="/projects">
                        <motion.div
                            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white py-2 px-4 rounded-[28px] font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.div>
                    </Link>
                    <Link href="/contact">
                        <motion.div
                            className="bg-gray-900 hover:bg-red-700 transition duration-300 text-white py-2 px-4 outline-red-600 border-2 border-red-600 rounded-[28px] font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.div>
                    </Link>
                    
                </div>
            </motion.div>

            <motion.div
                className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            >
                <Image
                    src={img}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                    className="rounded-full opacity-90 shadow-lg hover:opacity-100 transition duration-300"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
