"use client";
import React, { useState } from 'react';
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endPoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endPoint, options);
        const resData = await response.json();
        console.log(resData);

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };
    return (
        <section className='mt-12 md:mt-12 pt-24'>
        <hr className='pt-20'/>
            <section
                id='contact'
                className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
            >
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-800 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className=''>
                    <h5 className='text-xl font-bold text-white my-2'>
                        Let&apos;s Connect
                    </h5>
                    <p className='text-[#ADB7BE] mb-4 max-w-md'>
                        I am currently looking for opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I&apos;ll try my best
                        to get to you!
                    </p>
                    <div className="social flex flex-row gap-2">
                        <Link href={"https://github.com/de-so"} target='_blank' rel='noopener noreferrer' >
                            <Image src={GithubIcon} alt='Github Icon' />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/desouvik/"} target='_blank' rel='noopener noreferrer' >
                            <Image src={LinkedinIcon} alt='Linkedin Icon' />
                        </Link>
                    </div>
                </div>
                <div>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className='p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'
                                required
                                placeholder='john@google.com'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                            <input
                                name="subject"
                                type="subject"
                                id="subject"
                                className='p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'
                                required
                                placeholder='Just saying hi'
                            />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>Message</label>
                            <textarea
                                name="message"
                                type="message"
                                id="message"
                                className='p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full'
                                required
                                placeholder="Let's talk about ..."
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-primary-800 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                            Send Message
                        </button>
                        {emailSubmitted ? (
                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        ) : <p></p>}
                    </form>
                </div>
            </section>
        </section>
    );
};

export default EmailSection;
