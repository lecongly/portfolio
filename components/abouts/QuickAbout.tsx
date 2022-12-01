import React from 'react';
import {Link as LocalLink} from 'react-scroll/modules';
import {BsArrowDownLeft} from 'react-icons/bs';
import Title from '@components/core/Title';

const QuickAbout = () => {
    return (
        <section className="container mx-auto px-5 pb-20 flex flex-col items-start justify-center">
            <Title title="About" url="/about"/>
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
            <div className="w-full mb-6">
                <div className="">
                    <h2 className="text-lg font-semibold">Innovation and creativity</h2>
                    <p className="text-base font-normal text-zinc-700 dark:text-zinc-300 ">
                        Always try to find new ideas to develop and maintain in continues learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuickAbout;