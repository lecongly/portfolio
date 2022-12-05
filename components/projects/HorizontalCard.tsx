import React, {useContext} from 'react';
import {IProject} from '../../types/IProject';
import Link from 'next/link';
import Image from 'next/image';
import {FiExternalLink, FiGithub} from 'react-icons/fi';
import {AppContext} from '../../context/AppContext';
import {motion} from "framer-motion";

interface Props {
    project: IProject;
    current: number | null;
    setCurrent: (arg: number | null) => void;
    index: number;
};
const HorizontalCard = ({current, project, index, setCurrent}: Props) => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    const initX = (index % 2 === 0) ? '100vw' : '-100vw';
    return (
        <motion.div
            initial={{
                x: initX,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1,
                transition: {duration: 0.75, delay: index * 0.25}
            }}
            onMouseEnter={() => setCurrent(index)}
            onMouseLeave={() => setCurrent(null)}
            className="w-full my-5 block md:flex odd:flex-row even:flex-row-reverse items-center justify-between
  "
        >
            <Link href={`/projects/${project.slug}`}>
                <div
                    className="flex items-center justify-center w-full h-full overflow-hidden rounded-lg"
                    onMouseEnter={() => cursorEnter()}
                    onMouseLeave={() => cursorLeave()}
                >
                    <Image
                        className={`duration-150 rounded-lg ${current === index ? 'scale-100' : 'scale-95'}`}
                        src={project.cover_image}
                        alt={project.title}
                        width={680}
                        height={480}
                    />
                </div>
            </Link>
            <div
                className={`w-full flex flex-col mt-3 md:mt-0 ${
                    index % 2 === 0
                        ? 'items-start md:items-end ml-0 md:ml-5 '
                        : 'items-start mr-0 md:mr-5 '
                }`}
            >
                <div>
                    {project.categories.map((category, i) => (
                        <span className="font-medium text-sm text-neutral-400 first:ml-0 mx-2 last:mr-0" key={i}>
                            {category}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl my-3 font-semibold">{project.title}</h3>
                <p
                    className={`leading-7 font-normal text-base ${
                        index % 2 === 0
                            ? 'text-left md:text-right '
                            : 'text-left '
                    }`}
                >
                    {project.description}
                </p>
                <div className="flex flex-row flex-wrap items-center justify-start mt-3">
                    {project.technologies.map((technology, i) => (
                        <p key={i}
                           className=" px-2 py-1 rounded-lg border-zinc-100 text-xs font-light ">
                            {technology}
                        </p>
                    ))}
                </div>
                <div
                    className={`flex items-center justify-center mt-3 ${
                        index % 2 === 0
                            ? 'flex-row-reverse md:flex-row'
                            : 'flex-row-reverse'
                    }`}
                >
                    {project.external_url && (
                        <a
                            className="mx-2 h-10 w-10 flex items-center justify-center text-xl hover:text-sky-500 dark:hover:text-purple-500 duration-150"
                            target="_blank"
                            rel="noreferrer noopener"
                            href={project.external_url}
                            onMouseEnter={() => cursorEnter()}
                            onMouseLeave={() => cursorLeave()}
                        >
                            <FiExternalLink/>
                        </a>
                    )}
                    {project.host_url && (
                        <a
                            className="mx-2 h-10 w-10 flex items-center justify-center text-xl hover:text-sky-500 dark:hover:text-purple-500 duration-150"
                            target="_blank"
                            rel="noreferrer noopener"
                            href={project.host_url}
                            onMouseEnter={() => cursorEnter()}
                            onMouseLeave={() => cursorLeave()}
                        >
                            <FiExternalLink/>
                        </a>
                    )}
                    {project.github_url && (
                        <a
                            className="mx-2 h-10 w-10 flex items-center justify-center text-xl hover:text-sky-500 dark:hover:text-purple-500 duration-150"
                            target="_blank"
                            rel="noreferrer noopener"
                            href={project.github_url}
                            onMouseEnter={() => cursorEnter()}
                            onMouseLeave={() => cursorLeave()}
                        >
                            <FiGithub/>
                        </a>
                    )}
                    <Link href={`/projects/${project.slug}`}>
                        <div
                            className="px-6 py-3 rounded-lg bg-violet-600 text-white"
                            onMouseEnter={() => cursorEnter()}
                            onMouseLeave={() => cursorLeave()}
                        >
                            View project
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default HorizontalCard;