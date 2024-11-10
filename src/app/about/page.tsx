"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const AboutMePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black mt-10 text-white flex flex-col items-center justify-center px-6 py-12">
            <motion.div
                className="max-w-3xl flex flex-col space-y-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Title Section */}
                <motion.h1
                    className="text-4xl font-bold md:text-6xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    About Me
                </motion.h1>

                {/* Introduction */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    Hey there! I&apos;m an IT engineering student in my final year with a passion for full-stack web development, and I'm always on the lookout to push the boundaries of modern web design and development.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center space-x-4 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    {["React", "Next.js", "NodeJs", "Express", "TypeScript", "Framer Motion", "MongoDB", "Prisma", "Redux"].map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-red-600 mt-4 text-white px-4 py-2 rounded-full text-sm md:text-base"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-10 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Education</h2>
                    <div className="text-gray-400 space-y-2">
                        <p><span className="font-semibold text-white">Bachelor of Technology in Information Technology</span></p>
                        <p>JSS Noida (7.94 CGPA)</p>
                        <p>Year of Graduation: 2025</p>
                    </div>
                    <div className="text-gray-400 mt-4 space-y-2">
                        <p><span className="font-semibold text-white">Schooling</span></p>
                        <p>Carman School Dehradun (93.4% and 90%)</p>
                        <p>Year of Graduation: 2020</p>
                    </div>
                </motion.div>

                {/* Bio & Current Focus */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Currently, I&apos;m focused on developing scalable, real-time applications that deliver dynamic, engaging experiences. My recent projects include Serenity, an event-hosting platform, and MindfulAI, a mental health support chatbot. Both have allowed me to deepen my expertise in backend integration, UX design, and working with complex front-end frameworks.
                </motion.p>

                {/* Vision & Goals */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    I aspire to build applications that not only function seamlessly but also make a meaningful impact. Through continuous learning and hands-on experience, I&apos;m on a journey to master advanced tech and contribute to innovative projects.
                </motion.p>

                {/* CTA Links */}
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                >
                    <Link href="/projects" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-[28px] text-lg transition duration-300">
                        My Projects
                    </Link>
                    <Link href="/contact" className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-[28px] text-lg transition duration-300">
                        Contact Me
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutMePage;
