import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import img1 from '@/assets/project-1.png';
import img2 from '@/assets/project-2.png';
import img3 from '@/assets/project-3.png';
import img4 from '@/assets/project-4.png';
const page = () => {
    return (
        <div className="min-h-screen bg-black mt-10  text-white p-6 md:py-12 md:px-40">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                <ProjectCard githubLink="https://github.com/sdhanraj300/serenity" img={img1} title="Serenity Events" desc="" projectLink="https://serenityevents.vercel.app/" />
                <ProjectCard githubLink='https://github.com/sdhanraj300/casecobra2' title="Case Cobra" img={img2} desc="" projectLink="https://casecobra2-tau.vercel.app/" />
                <ProjectCard githubLink='https://github.com/sdhanraj300/genai-project' img={img3} title="Mindful AI" desc="" projectLink="https://mindfulai.vercel.app/" />
                <ProjectCard githubLink='https://github.com/sdhanraj300/Metaversee' img={img4} title="Metaverse" desc="" projectLink="https://metaverse-69.netlify.app/" />
            </div>
        </div>
    );
};

export default page;
