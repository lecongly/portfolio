import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-between pt-20 pb-8 bg-white dark:bg-neutral-900 ">
            <div className="w-11/12 md:w-full flex flex-col justify-center items-center text-sm">
                <span
                    className="text-slate-700 dark:text-gray-300 text-center flex justify-center items-center gap-x-1">
                    No Rights Reserved
                    <a
                        href="https://github.com/lecongly/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub/>
                    </a>
                </span>
                <a
                    className="text-violet-600 font-medium tracking-wider"
                    href="https://www.linkedin.com/in/lecongly/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @lecongly
                </a>
                <span
                    className="text-slate-700 dark:text-gray-300 tracking-wider">
                    • ©{new Date().getFullYear()} •
                </span>
            </div>
        </div>
    );
};

export default Footer;