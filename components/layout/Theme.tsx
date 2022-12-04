import {useTheme} from 'next-themes';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import {useContext} from 'react';
import {AppContext} from '../../context/AppContext';


interface Props {
    setIsOpen: (arg: boolean) => void;
}

export const Theme = ({setIsOpen}: Props) => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    const {systemTheme, theme, setTheme} = useTheme();
    const handleTheme = (theme: string) => {
        setTheme(theme);
        setIsOpen(false);
    };
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
        return (
            <button
                onClick={() => handleTheme('light')}
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-zinc-900 hover:border-zinc-700 hover:border-2 flex items-center justify-center"
            >
                <BsFillSunFill/>
            </button>
        );
    } else {
        return (
            <button
                onClick={() => handleTheme('dark')}
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
                className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-zinc-100 hover:border-2 hover:border-zinc-300"
            >
                <BsFillMoonFill/>
            </button>
        );
    }
};
