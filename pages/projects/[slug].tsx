import React from 'react';
import Layout from '@components/layout';
import {getFileBySlug, getFiles} from 'lib/mdx';
import {Props} from 'types/staticProps';
import {IProject} from '../../types/IProject';
import {NextPage} from 'next';
import {MDXRemote} from 'next-mdx-remote';
import MDXComponents from '@components/mdx';

type ProjectProps = {
    source: any;
    frontmatter: IProject;
};

const ProjectDetailPage: NextPage<ProjectProps> = ({source, frontmatter}) => {
    return (
        <Layout
        >
            <section
                className="container mx-auto px-5 pt-24 relative min-h-screen ">
                <MDXRemote {...source} components={MDXComponents}/>
            </section>
        </Layout>
    );
};

export default ProjectDetailPage;

export async function getStaticPaths() {
    const projects = await getFiles('projects');
    const paths = projects.map((project) => ({
        params: {
            slug: project.replace(/\.mdx/, ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}: Props) {
    const {slug} = params;
    const {source, frontmatter} = await getFileBySlug('projects', slug);
    return {
        props: {
            source,
            frontmatter: {
                ...frontmatter,
            },
        },
    };
}