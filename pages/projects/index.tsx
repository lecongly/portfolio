import React, {useState} from 'react';
import {IProjects} from '../../types/IProject';
import {NextPage} from 'next';
import Layout from '@components/layout';
import {projects} from 'data/projects';

import Title from '@components/core/Title';
import HorizontalCard from '@components/projects/HorizontalCard';

const ProjectsPage: NextPage<IProjects> = () => {
    const [current, setCurrent] = useState<number | null>(null);
    return (
        <Layout>
            <section className="pt-24 container mx-auto px-5">
                <Title title="Projects"/>
                <div className="flex flex-col items-center justify-center">
                    {projects.map((project, index) => (
                        <HorizontalCard
                            key={project.slug}
                            current={current}
                            setCurrent={setCurrent}
                            index={index}
                            project={project}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default ProjectsPage;