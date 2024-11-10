"use client";
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { useParams } from 'next/navigation';
import React from 'react';
import img1 from '@/assets/project-1.png';
import img2 from '@/assets/project-2.png';
import img3 from '@/assets/project-3.png';
import img4 from '@/assets/project-4.png';

const ProjectPage = () => {
  const params = useParams();
  const title = params['id'][0];
  const projects = {
    serenity: {
      img: img1,
      title: 'Serenity Events',
      description:
        'Serenity is an intuitive event management app that simplifies the process of creating, managing, and attending events.Users can create events, invite guests(both registered and non- registered), and track RSVP responses in real- time.Event creators have the ability to edit guest lists before sending invitations and monitor attendance status.Attendees can interact by posting images, GIFs, emojis, and comments on the event page.Serenity email invitations are sent through SendGrid, ensuring a seamless and engaging experience for both hosts and guests.',
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Prisma', 'SendGrid'],
      projectLink: 'https://serenityevents.vercel.app/',
      githubLink: 'https://github.com/sdhanraj300/serenity-events',
    },
    casecobra: {
      img: img2,
      title: 'Case Cobra',
      description:
        'This is a fully custom-built online store developed from scratch using Next.js 14, featuring a sleek and modern landing page designed with custom artwork by a professional illustrator. It includes a secret admin dashboard to manage orders and a drag-and-drop file upload system. Customers can easily purchase directly from the site, and the store offers a unique phone case configurator. Authentication is handled via Kinde, and a beautiful thank-you email is sent after each purchase. The interface is powered by shadcn-ui with an Apple-inspired design, all written in TypeScript, providing a seamless and secure shopping experience.',
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'NeonDB', 'Kinde', 'Prisma'],
      projectLink: 'https://casecobra2-tau.vercel.app/',
      githubLink: 'https://github.com/sdhanraj300/casecobra2',
    },
    mindfulai: {
      img: img3,
      title: 'Mindful AI',
      description:
        'MindfulAI is a chatbot app designed to provide students with empathetic support for mental health-related issues. Using the Gemini API for its language model, MindfulAI offers personalized, compassionate responses to users questions, helping them navigate mental challenges. The chatbot is custom-trained with a wide range of questions and answers, ensuring it responds in an empathetic and understanding manner. Built with React, Redux, MongoDB, and Prisma, MindfulAI aims to create a safe and supportive environment for students seeking guidance on mental health concerns.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Gemini API','GenAI'],
      projectLink: 'https://mindfulai.vercel.app/',
      githubLink: 'https://github.com/sdhanraj300/genai-project',
    },
    metaverse: {
      img: img4,
      title: 'Metaverse',
      description:
        'Metaverse is an immersive front-end application that showcases advanced web development skills through interactive 3D environments. Built with Framer Motion, it brings a dynamic and fluid experience to the web, featuring smooth animations, transitions, and engaging UI elements. The app leverages Framer Motion’s powerful animation library to create seamless, high-performance motion effects, enhancing the user experience as they explore the virtual space. Metaverse demonstrates the capabilities of modern web technologies to create an interactive, visually compelling front-end that merges design with functionality, perfect for showcasing creative and technical front-end development expertise.',
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS','Framer Motion'],
      projectLink: 'https://metaverse-69.netlify.app/',
      githubLink: 'https://github.com/sdhanraj300/Metaversee',
    },
  };

  let projectData;
  if (title === 'serenity-events') {
    projectData = projects.serenity;
  }
  if (title === 'mindful-ai') {
    projectData = projects.mindfulai;
  }
  if (title === 'case-cobra') {
    projectData = projects.casecobra;
  }
  if (title === 'metaverse') {
    projectData = projects.metaverse;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return <ProjectDetailPage {...projectData} />;
};

export default ProjectPage;
