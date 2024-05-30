"use client";
import React from 'react';
import dynamic from 'next/dynamic';


const AnimatedNumbers = dynamic(() => 
    import("react-animated-numbers"),
    { ssr: false});

const achievementsList = [
    {
        metric: "Projects",
        value: "15",
        postfix: "+",
    },
    {
        metric: "Certifications",
        value: "10",
        postfix: "+",

    },
    {
        prefix: "~",
        metric: "Clients",
        value: "5",
    },   
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 sm:px-2 xl:px-16 sm:min-w-80'>
        <div className="border-[#33353F] border rounded-md py-8 px-0 flex flex-row items-center justify-around">
            {achievementsList.map((achievement, index) => {
                return(
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <h2 className='text-white lg:text-4xl text-xl font-bold flex flex-row'>
                            {achievement.prefix}
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale='en-US'
                                className='text-white sm:text-base lg:text-4xl md:text-xl font-bold'
                                configs = {(index) => ({
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] lg:text-base text-sm'>{achievement.metric}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default AchievementsSection