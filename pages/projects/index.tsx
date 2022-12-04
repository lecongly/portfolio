import React, {useState} from 'react';
import {IProject, IProjects} from '../../types/IProject';
import {NextPage} from 'next';
import Layout from '@components/layout';

import Title from '@components/core/Title';
import HorizontalCard from '@components/projects/HorizontalCard';
import {getAllFilesMetadata} from '../../lib/mdx';

const ProjectsPage: NextPage<IProjects> = ({projects}) => {
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

export async function getStaticProps() {
    const projects = await getAllFilesMetadata('projects');
    const organizedProjects = projects.sort((a: IProject, b: IProject) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return {
        props: {projects: organizedProjects},
    };
}