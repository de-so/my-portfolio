"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { AnimatePresence, motion } from 'framer-motion';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <ul className='list-disc pl-2'>
          <li>Python</li>
          <li>Next.js</li>
          <li>Django</li>
          <li>AI-ML</li>
          <li>Kotlin</li>
        </ul>
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>B.Tech in Computer Science</li>
        <li>Meghnad Saha Intitute of Technology, Kolkata</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Cyber Security Essentials</li>
        <li>Machine Learning using Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id='about' className='text-white pt-8'>
      <hr className=''/>
      <div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 sm:mx-0 xl:px-16 md:min-h-screen'>
        <Image className='lg:mt-0 md:mt-0 sm:mt-0 rounded-md' src="/images/about-image.png" alt='about-image' priority={true} width={450} height={450} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>Hi, I am <span className='italic'><span className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] pr-0.5'>S</span>ouvik</span>, a computer science bachelor from <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] via-[var(--purple)] to-[var(--secondary)]'>MSIT, Kolkata</span>. I always prefer style over anything and I have lot of works to prove this. I worked on populer <span className='text-[var(--primary)] italic'>Website Development</span> Frameworks, <span className='text-[var(--primary)] italic'>Android App Development</span> and as well as python based <span className='text-[var(--primary)] italic'>Software Development</span>. I tagged some of my well known projects in this portfolio. If you like my work or if you want to hire me, feel free to reach me out using the contact form attached in the below section!</p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
            {/* Avoid below */}
            {/* <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} children={"Skills"} />
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} children={"Education"} />
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"} children={"Certifications"} /> */}
          </div>
          <div className="mt-8">
            <AnimatePresence mode='wait'>
            {TAB_DATA.filter((t) => t.id === tab).map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              {t.content}
            </motion.div>
          ))}
            {/* {TAB_DATA.find((t) => t.id === tab).content} */}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutSection