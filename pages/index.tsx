import Layout from '@components/layout';
import Banner from '@components/homepage/Banner';
import Projects from '@components/projects/Projects';
import QuickAbout from '@components/abouts/QuickAbout';
import {GetServerSideProps, NextPage} from 'next';
import {getBlogs} from '../server/blogs';
import {BlogPost} from '../types/IBlog';
import Blogs from '@components/blog/Blogs';

interface Props {
    blogData: BlogPost[]
}

const Home: NextPage<Props> = ({blogData}) => {
    const lastBlog = blogData[0];
    return (
        <Layout>
            <Banner/>
            <QuickAbout/>
            <Projects/>
            <Blogs lastBlog={lastBlog}/>
        </Layout>
    );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    let blogs = await getBlogs();
    return {
        props: {
            blogData: blogs,
        },
    };
};