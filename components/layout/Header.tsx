import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {Logo} from './Logo';
import MenuBtn from './MenuBtn';
import {motion, AnimatePresence} from 'framer-motion';
import Drawer from './Drawer';
import {useTheme} from 'next-themes';
import {useWindow} from 'hooks/useWindow';
import {AppContext} from '../../context/AppContext';

const Header = () => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    let {theme} = useTheme();
    const {scrollY} = useWindow();
    const [logoColor, setLogoColor] = useState("");
    useEffect(() => {
        setLogoColor(theme === 'light' ? '#1F1F1F' : '#F8F8F8');
    }, [theme]);
    return (
        <motion.header
            className={`z-50 fixed top-0 left-0 w-full flex items-center flex-col duration-300  ${scrollY > 96 ? 'backdrop-blur-sm' : 'backdrop-blur-none'}`}>
            <nav className="container mx-auto px-5 h-24 flex items-center justify-between z-50">
                <Link href="/"
                      onMouseEnter={() => cursorEnter()}
                      onMouseLeave={() => cursorLeave()}
                >
                    <Logo
                        width="60"
                        height="60"
                        bgColor={logoColor}
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