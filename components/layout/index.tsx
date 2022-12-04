import {useWindow} from 'hooks/useWindow';
import React from 'react';
import {useContext} from 'react';
import {motion} from 'framer-motion';

import {AppContext} from 'context/AppContext';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}: Props) => {
    const {cursor} = useContext(AppContext);
    const {mousePosition} = useWindow();

    const cursorVariants = {
        default: {
            height: 12,
            width: 12,
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
            zIndex: 1000,
        },
        text: {
            height: 48,
            width: 48,
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            zIndex: 1000,
        },
    };
    return (
        <>
            <main className={'mx-auto w-full bg-white dark:bg-neutral-900'}>{children}</main>
            <motion.div
                className={`pointer-events-none fixed lg:top-0 xl:top-0 lg:left-0 xl:left-0 rounded-full  ${
                    cursor === 'text'
                        ? 'mix-blend-difference dark:mix-blend-difference bg-zinc-50 dark:bg-neutral-900'
                        : 'bg-zinc-900 dark:bg-white'
                }`}
                variants={cursorVariants}
                animate={cursor}
            />
        </>
    );
};

export default Layout;