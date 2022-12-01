import React from 'react';
import Link from 'next/link';
import {AnimatePresence, motion} from "framer-motion";
import Image from 'next/image';
import {IProject} from 'types/IProject';

interface CardProps {
    project: IProject;
    current: number | null;
    setCurrent: (arg: number | null) => void;
    index: number;
};

const Card = ({current, project, index, setCurrent}: CardProps) => {
    const {categories, cover_image, slug, title} = project;

    const MouseIsEnter = () => {
        setCurrent(index);
    };

    const MouseIsLeave = () => {
        setCurrent(null);
    };
    return (
        <Link href={`/projects/${slug}`}>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.25}}
                className="relative aspect-video flex items-center justify-center"
                onMouseEnter={() => MouseIsEnter()}
                onMouseLeave={() => MouseIsLeave()}
            >
                <AnimatePresence>
                    {current === index && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 0.9}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className="absolute p-6 bg-white dark:bg-zinc-900 top-0 left-0 w-full h-full flex items-center justify-center flex-col z-40"
                        >
                            <div className="flex items-center justify-center">
                                {categories.map((category, i) => (
                                    <p className="mx-2 text-xs" key={i}>
                                        {category}
                                    </p>
                                ))}
                            </div>
                            <h2 className="text-2xl tracking-wide font-semibold mt-1">{title}</h2>
                        </motion.div>)}
                </AnimatePresence>
                <Image src={cover_image} alt={title} width={680} height={480} quality={100}/>
            </motion.div>

        </Link>
    );
};

export default Card;