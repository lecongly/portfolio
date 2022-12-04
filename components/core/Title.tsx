import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs';

type Props = {
    title: string;
    url?: string;
};
const Title = ({title, url}: Props) => {
    return (
        <div className={`w-full mb-6 flex flex-row items-center ${url ? 'justify-between' : 'justify-start'}`}>
            <h1 className="text-2xl font-medium tracking-wide relative after:absolute after:w-8 after:h-0.5 after:bg-zinc-900 after:dark:bg-zinc-100 after:top-2/4 after:translate-y-2/4 after:-right-10 after:rounded-lg">
                {title}
            </h1>
            {url && (
                <Link href={url}>
                    <motion.div
                        animate={{x: 10, transition: {repeat: Infinity, duration: 1}}}
                        className="flex items-center justify-center py-2 px-6 border-2 border-transparent hover:border-zinc-50 dark:hover:border-zinc-800 duration-200">
                        <span className="text-base mr-2">View all</span>
                        <BsArrowRight/>
                    </motion.div>
                </Link>
            )}
        </div>
    );
};

export default Title;