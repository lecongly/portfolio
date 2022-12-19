import Link from 'next/link';
import React, {useContext} from 'react';
import {BlogPost} from '../../types/IBlog';
import Image from 'next/image';
import {AppContext} from '../../context/AppContext';

const BlogCard = ({createdAt, author, title, tags, url}: BlogPost) => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    const createdDate: Date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return (
        <Link href={url}>
            <div
                className="border rounded-lg overflow-hidden h-full"
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
            >
                <div className="w-full mb-3 relative">
                    <Image className="object-contain bg-white" src={author.avatar} alt={title}
                           width={680}
                           height={480}/>
                </div>
                <div
                    className="md:col-span-2 lg:col-span-4 flex flex-col items-start justify-center p-5 mt-5 md:mt-0 lg:mt-0 xl:mt-0 ">
                    <p className="mb-3 font-medium text-sm text-violet-500">{createdDate.toLocaleDateString('en-US', options)}</p>
                    <h2 className="text-xl font-medium mb-3">{title}</h2>
                    <div className="mb-3 flex flex-row items-center justify-start">
                        {tags.map((tag, i: number) => (
                            <p key={i}
                               className="text-sm mx-1 first:ml-0 font-normal text-neutral-500 dark:text-neutral-300">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-300 font-normal ">{author.name}</p>
                </div>
            </div>

        </Link>
    );
};

export default BlogCard;