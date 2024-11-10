"use client";
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    img: string | StaticImageData;
    title: string;
    desc: string;
    projectLink: string;
    githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, title, desc, projectLink, githubLink }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`);
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };

    return (
        <motion.div
            onClick={handleCardClick}
            className="bg-black text-white rounded-[28px] hover:shadow-red-600 shadow-lg overflow-hidden transform transition hover:cursor-pointer  duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative h-[300px] w-full bg-gray-700">
                <Image
                    src={img}
                    alt="Project"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[28px]"
                />
            </div>
            <div className="p-4">
                <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
                <p className="text-gray-400 mt-2 text-sm md:text-base">
                    {desc}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <Link
                        href={projectLink}
                        onClick={handleLinkClick}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-[28px] transition duration-300 text-sm md:text-base"
                    >
                        View Live Project
                    </Link>

                    <Link
                        href={githubLink}
                        onClick={handleLinkClick}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-[28px] transition duration-300"
                    >
                        <FaGithub className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
