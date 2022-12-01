import {useEffect, useState} from 'react';

export const useWindow = () => {
    const [isRendering, setIsRendering] = useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsRendering(true);

            const handleMouseMove = (e: any) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            const handleScreenResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleScreenResize);
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.addEventListener('mousemove', handleMouseMove);
                window.removeEventListener('resize', handleScreenResize);
                window.addEventListener('scroll', handleScroll);
            };
        } else {
            setIsRendering(false);
        }
    }, []);

    return {isRendering, windowSize, mousePosition, scrollY};
};