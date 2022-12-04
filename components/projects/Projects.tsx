import React, {useState} from 'react';
import Card from '@components/projects/Card';
import Title from '@components/core/Title';
import {IProject} from '../../types/IProject';

type Props = {
    projects: IProject[];
};

const Projects = ({projects}: Props) => {
    const [current, setCurrent] = useState<number | null>(null);
    return (
        <section className="mx-auto container px-5 flex flex-col items-center justify-center">
            <Title title="Projects" url="/projects"/>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Card key={project.slug} project={project} current={current} setCurrent={setCurrent} index={index}/>
                ))}
            </div>
        </section>
    );
};

export default Projects;