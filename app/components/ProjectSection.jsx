"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from "framer-motion";

const PROJECTS_DATA = [
    {
        id: 1,
        title: "TextYum - Kitchen for your Text",
        description: "REACT JS",
        image: "/images/projects/1.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/de-so/TxtYum-Text-Editor",
        previewUrl: "https://txtyum-text-editor.vercel.app/",
    },
    {
        id: 2,
        title: "Motivator - Take Daily Dose",
        description: "HTML - CSS - JS",
        image: "/images/projects/2.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/de-so/Motivator",
        previewUrl: "https://yourmotivator.netlify.app/",
    },
    {
        id: 3,
        title: "Fake News Detector",
        description: "ML - DJANGO",
        image: "/images/projects/3.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Amazon Clone",
        description: "(Copy-Paste): Ignore this one ;)",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/de-so",
        previewUrl: "https://amazon-deso.netlify.app/",
    },
    {
        id: 5,
        title: "Simple Portfolio Template",
        description: "HTML - CSS",
        image: "/images/projects/5.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/de-so/Portfolio-Template",
        previewUrl: "https://portfolio-template01.netlify.app/",
    },
    {
        id: 6,
        title: "Project 6",
        description: "Project 6 Description",
        image: "/images/projects/6.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = PROJECTS_DATA.filter((project) =>
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='projects' className='pt-20'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tags={project.tag}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectSection;