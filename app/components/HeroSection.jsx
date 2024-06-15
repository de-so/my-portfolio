"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id='top' className='lg:py-16'>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-purple-600">Hello, I&apos;m {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Souvik D.',
                1000,
                'Leet-Coder',
                1000,
                'Web Developer',
                1000,
                'Android Dev...',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '0.8em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
          &ldquo;Hi, I am sharing you some links to show off! <br />Just kidding, I&apos;m really working hard to improve. Check my <Link href={"https://leetcode.com/u/souvik_2024/"} className='text-secondary-500'>leetcode</Link> profile. It&apos;s not so unique, but I learned so many things there. <br />Umm, you can swipe up, I dont have anymore opening speech :)&rdquo;
          </p>
          <div>
            <Link href={"#contact"} className='rounded-full w-full sm:w-fit px-6 py-3 mr-4 gradient-color'>Hire Me</Link>
            <button
              className='rounded-full w-full sm:w-fit px-1 py-1  bg-gradient-to-br from-secondary-300 via-primary-500 to-purple-800 mt-3 border border-white'
            >
              <Link
                href={"/doc/Resume.pdf"}
                download={"Souvik_D_cv.pdf"}
                target="_blank" >
                <span className='transition duration-300 block text-neutral-100 bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
              </Link>
            </button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px]lg:h-[400px] relative">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }} // Animation sequence: move up, move down, return to original position
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}// Adjust duration and easing as needed
            >
              <Image
                src='/images/hero-image4.png'
                alt='hero image'
                className='rounded-b-md absolute transform -translate-x-1/2  top-1/2 left-1/2 '
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection