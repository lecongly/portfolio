import {GetServerSideProps, NextPage} from 'next';
import Layout from '@components/layout';
import Banner from '@components/homepage/Banner';
import Projects from '@components/projects/Projects';
import QuickAbout from '@components/abouts/QuickAbout';
import Blogs from '@components/blog/Blogs';
import {getAllFilesMetadata} from 'lib/mdx';
import {getBlogs} from 'lib/blogs';
import {IProject} from 'types/IProject';
import {BlogPost} from 'types/IBlog';

interface Props {
    blogData: BlogPost[];
    projects: IProject[];
}

const Home: NextPage<Props> = ({blogData, projects}) => {
    const lastBlog = blogData[0];
    return (
        <Layout
            metadata={{
                title: 'Le Cong Ly',
                description: 'Software Engineer.',
            }}
        >
            <Banner/>
            <QuickAbout/>
            <Projects projects={projects}/>
            <Blogs lastBlog={lastBlog}/>
        </Layout>
    );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    const projects = await getAllFilesMetadata('projects');
    const sortedProjects = projects
        .sort((a: IProject, b: IProject) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);
    let blogs = await getBlogs();
    return {
        props: {
            projects: sortedProjects,
            blogData: blogs,
        },
    };
};