import React from 'react';
import {BlogPost} from '../../types/IBlog';
import Image from 'next/image';
import Link from 'next/link';
import {FiStar} from 'react-icons/fi';

const LastBlogCard = ({createdAt, author, title, tags, url}: BlogPost) => {
    const createdDate: Date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 border">
            <div className="md:col-span-1 h-full flex items-center justify-center overflow-hidden relative md:border-r">
                <div
                    className="absolute h-12 w-12 top-3 left-3 rounded-md bg-white dark:bg-neutral-900 z-40 flex items-center justify-center text-2xl">
                    <FiStar/>
                </div>
                <Image src={author.avatar} alt={author.name} width={680} height={480}
                       className="object-contain w-full"/>
            </div>
            <div className="md:col-span-2 flex flex-col items-start justify-start p-5">
                <p className="mb-6 font-semibold text-violet-500">{createdDate.toLocaleDateString('en-US', options)}</p>
                <h2 className="xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-gray-900 dark:text-gray-200 font-bold mb-3">
                    {title}
                </h2>
                <span className="flex flex-row items-center justify-start mb-6">
          {tags.map((tag, i) => (
              <p key={i} className="text-sm mx-1 first:ml-0 font-normal text-neutral-500 dark:text-neutral-200">
                  {tag}
              </p>
          ))}
        </span>
                <p className="text-neutral-500 dark:text-neutral-100 font-normal mb-6">{author.name}</p>
                <Link href={url!}>
                    <div
                        className="xs:self-center sm:self-center md:self-start lg:self-start xl:self-start px-6 py-3 rounded-lg bg-violet-600 text-white"
                    >
                        Read more
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LastBlogCard;