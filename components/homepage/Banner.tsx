import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center container mx-auto px-5 py-40">
            <h1 className="text-3xl mb-3 tracking-wide font-semibold ">Hi! I&apos;m Le Cong Ly!️</h1>
            <p className="text-sm w-2/4 text-center">Software Engineer.</p>
            <Image className="w-40 my-6" src={"/assets/images/banner.png"} alt={"banner"} width={1000} height={1000}/>
            <p className="text-base w-full sm:w-3/4 lg:w-2/4 text-center">
                Welcome to my tiny space in the <i>World Wide Web</i>. Here I show my projects, and occasionally write
                things I
                like.
            </p>
        </section>
    );
};

export default Banner;