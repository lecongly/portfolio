import React, {useState} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import {getBlogs} from '../../server/blogs';
import {BlogPost} from 'types/IBlog';
import Layout from '@components/layout';
import Title from '@components/core/Title';
import LastBlogCard from '@components/blog/LastBlogCard';
import BlogSearch from '@components/blog/BlogSearch';

interface Props {
    blogData: BlogPost[]
    tags: string[]

}

const BlogPage: NextPage<Props> = ({blogData, tags}) => {
    const lastBlog = blogData[0];
    const [searchedArticles, setSearchedArticles] = useState<string>('');
    const filteredBlogs = blogData.filter((blog: BlogPost) =>
        blog.title.toLowerCase().includes(searchedArticles.toLowerCase())
    );

    return (
        <Layout>
            <section className="pt-24 container mx-auto px-5">
                <Title title="Blog"/>
                <LastBlogCard {...lastBlog}/>
            </section>
            <section className="container mx-auto px-5 mt-12 ">
                <Title title="More articles"/>
                <BlogSearch setSearchedArticles={setSearchedArticles}/>
            </section>
        </Layout>
    );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async () => {
    let blogs = await getBlogs();
    let tags: string[] = [];
    for (const blog of blogs) {
        for (const tag of blog.tags) {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        }
    }
    return {
        props: {
            blogData: blogs,
            tags: tags,
        },
    };
};