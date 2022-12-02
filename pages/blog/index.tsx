import React from 'react';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import {getBlogs} from '../../server/blogs';
import {BlogPost} from 'types/IBlog';

interface Props {
    blogData: BlogPost[]
    tags: string[]

}

const BlogPage: NextPage<Props> = ({blogData, tags}) => {
    console.log(blogData);
    console.log(tags);
    return (
        <div>
            BlogPage
        </div>
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