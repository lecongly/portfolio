import React from 'react';
import Layout from '@components/layout';
import {BsArrowDownLeft} from 'react-icons/bs';
import {Link as LocalLink} from 'react-scroll';
import Skills from '@components/abouts/Skills';
import Education from '@components/abouts/Education';
import Experience from '@components/abouts/Experience';
import Awards from '@components/abouts/Awards';
import QuickAbout from '@components/abouts/QuickAbout';

const About = () => {
    return (
        <Layout>
            <section className="container mx-auto px-5 py-40 flex items-center justify-start">
                <div className="w-full sm:w-5/6 md:w-4/6 h-full flex flex-col items-start justify-center">
                    <h1 className="mb-6 text-4xl font-medium tracking-wide relative after:absolute after:w-8 after:h-0.5 after:bg-zinc-900 after:top-2/4 after:translate-y-2/4 after:-right-10 after:rounded-lg">
                        A few worlds
                    </h1>
                    <blockquote
                        className="relative pl-5 text-zinc-700 dark:text-zinc-300 tracking-wide before:absolute before:top-0 before:left-0 before:w-2 before:rounded-sm before:h-full before:bg-pink-500 dark:before:bg-violet-500 mb-6">
                        I started in high school years doing things around programming. It&apos;s what I&apos;m most
                        passionate
                        about and I always give 200% to improve every day.
                    </blockquote>
                    <blockquote
                        className="relative pl-5 text-zinc-700 dark:text-zinc-300 tracking-wide before:absolute before:top-0 before:left-0 before:w-2 before:rounded-sm before:h-full before:bg-pink-500 dark:before:bg-violet-500 mb-6">
                        <i>&quot;Nothing is impossible&quot;</i>
                    </blockquote>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="">
                            <h2 className="text-lg font-semibold">Innovation and creativity</h2>
                            <p className="text-base font-normal text-zinc-700 dark:text-zinc-300 ">
                                Always try to find new ideas to develop and maintain in continues learning.
                            </p>
                        </div>
                    </div>
                    <div className=" flex items-center justify-start">
                        <p className="leading-7 tracking-wide mr-3">Check bellow if you want to know more about me.</p>

                        <LocalLink
                            to={'skills'}
                            spy={true}
                            smooth={true}
                            offset={-112}
                            duration={500}
                            className="w-12 h-12 flex items-center justify-center bg-black dark:bg-neutral-200 text-white dark:text-black rounded-full text-2xl cursor-pointer"
                        >
                            <BsArrowDownLeft/>
                        </LocalLink>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-5">
                <Skills/>
                <Education/>
                {/*<Experience/>*/}
                <Awards/>
            </section>
        </Layout>
    );
};

export default About;