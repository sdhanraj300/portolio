"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
            <motion.div
                className="max-w-3xl flex flex-col space-y-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-bold md:text-6xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    Get in Touch
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    I&apos;d love to connect! Feel free to reach out through any of the platforms below.
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <Link href="https://www.linkedin.com/in/sdhanraj300" target='_blank' passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-3xl text-blue-500 hover:text-blue-400 transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </motion.div>
                    </Link>

                    <Link href="https://github.com/sdhanraj300" target='_blank' passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-3xl text-gray-300 hover:text-gray-500 transition duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </motion.div>
                    </Link>

                    <Link href="https://twitter.com/dhanraj02025" target='_blank' passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </motion.div>
                    </Link>

                    <Link href="mailto:dhanraj02025@gmail.com" passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-3xl text-red-500 hover:text-red-400 transition duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </motion.div>
                    </Link>

                    <Link href="https://www.instagram.com/dhanrajxsingh" target='_blank' passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="text-3xl text-pink-500 hover:text-pink-400 transition duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
