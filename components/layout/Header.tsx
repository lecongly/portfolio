import React, {useState} from 'react';
import Link from 'next/link';
import {Logo} from './Logo';
import MenuBtn from './MenuBtn';
import {motion, AnimatePresence} from 'framer-motion';
import Drawer from './Drawer';
import {useTheme} from 'next-themes';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    let {theme} = useTheme();
    return (
        <motion.header className={` z-50 fixed top-0 left-0 w-full flex items-center flex-col duration-300 `}>
            <nav className="container mx-auto px-5 h-24 flex items-center justify-between z-50">
                <Link href="/">
                    <Logo
                        width="60"
                        height="60"
                        bgColor={theme === 'light' ? '#1F1F1F' : '#F8F8F8'}
                        initials={theme === 'light' ? '#FFFFFF' : '#1F1F1F'}
                    />
                </Link>
                <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen}/>
            </nav>
            <AnimatePresence>
                {isOpen && <Drawer setIsOpen={setIsOpen}/>}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;