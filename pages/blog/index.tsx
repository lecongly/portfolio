import React, {useState} from 'react';
import {GetServerSideProps, NextPage} from 'next';
import Layout from '@components/layout';
import Title from '@components/core/Title';
import LastBlogCard from '@components/blog/LastBlogCard';
import BlogSearch from '@components/blog/BlogSearch';
import BlogCard from '@components/blog/BlogCard';
import {getBlogs} from 'lib/blogs';
import {BlogPost} from 'types/IBlog';

interface Props {
    blogData: BlogPost[]
}

const BlogPage: NextPage<Props> = ({blogData}) => {
    const lastBlog = blogData[0];
    const [searchedArticles, setSearchedArticles] = useState<string>('');
    const filteredBlogs = blogData.filter((blog: BlogPost) =>
        blog.title.toLowerCase().includes(searchedArticles.toLowerCase())
    );

    return (
        <Layout
            metadata={{
                title: 'Blog –– Le Cong Ly',
                description: 'Software Engineer.'
            }}
        >
            <section className="pt-24 container mx-auto px-5">
                <Title title="Blog"/>
                <LastBlogCard {...lastBlog}/>
            </section>
            <section className="container mx-auto px-5 mt-12 ">
                <Title title="More articles"/>
                <BlogSearch setSearchedArticles={setSearchedArticles}/>

                <div className="w-full flex items-start justify-center min-h-[50vh]">
                    {!filteredBlogs.length ? (
                        <p className="text-center text-base text-neutral-500 dark:text-neutral-300">Articles not
                            found.</p>
                    ) : (
                        <div
                            className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async () => {
    let blogs = await getBlogs();
    return {
        props: {
            blogData: blogs,
        },
    };
};