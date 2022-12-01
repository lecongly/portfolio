import React from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}: Props) => {
    return (
        <>
            <main className={'mx-auto w-full bg-white dark:bg-neutral-900'}>{children}</main>
        </>
    );
};

export default Layout;