import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import Image from 'next/image';
import parse from 'html-react-parser';
import detail from './id.module.css';
import Layout from '@components/layout';
import {getBlogDetail} from 'lib/blogs';
import {BlogDetail} from 'types/IBlog';

interface Props {
    blogData: BlogDetail
}

const BlogDetailPage: NextPage<Props> = ({blogData}) => {
    const {author, bodyHTML, createdAt, title} = blogData;
    const createdDate: Date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return (
        <Layout
            metadata={{
                title: `${title} –– Blog –– Le Cong Ly`,
                description: `${title} –– ${author.name}`,
                date: createdDate.toLocaleDateString('en-US', options),
            }}
        >

            <section className="container mx-auto px-5 pt-24">
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <h1 className="text-center my-10 text-3xl font-bold"> {title} </h1>
                    <div className="flex justify-center mb-4">
                        <div className="flex">
                            <Image
                                className="rounded-full max-w-[50px] max-h-[50px] mb-4 mr-4 border dark:border-blue-500 bg-white"
                                src={author.avatar}
                                alt="author pfp"
                                width={100}
                                height={100}
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold text-xl"> {author.name} </p>
                                <div className="flex flex-wrap">
                                    <li className="list-none font-normal text-sm md:mr-4 sm:mr-0">
                                        <a href={author.url}>{author.url}</a>
                                    </li>
                                    <li className="list-none font-normal text-sm">
                                        {createdDate.toLocaleDateString('en-US', options)}
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${detail.html} flex flex-col`}>{parse(bodyHTML)}</div>
                </div>
            </section>
        </Layout>

    );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const route: string[] | string | undefined = context.query.id;
    const id = Number(route);
    let blogDetail = await getBlogDetail(id);
    return {
        props: {
            blogData: blogDetail,
        },
    };
};