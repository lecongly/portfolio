import Title from '@components/core/Title';
import React from 'react';
import {BlogPost} from '../../types/IBlog';
import LastBlogCard from './LastBlogCard';

interface Props {
    lastBlog: BlogPost
}

const Blogs = ({lastBlog}: Props) => {
    return (
        <section className="mt-12 container mx-auto px-5 flex flex-col items-center justify-center">
            <Title title="Last article" url="/blog"/>
            <LastBlogCard {...lastBlog} />
        </section>
    );
};

export default Blogs;