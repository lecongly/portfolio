import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import ROUTES from 'utils/routes.json';
import Link from 'next/link';
import {networks} from 'utils/networks';
import {useTheme} from 'next-themes';
import {Theme} from './Theme';

type Props = {
    setIsOpen: (arg: boolean) => void;
};

const Drawer = ({setIsOpen}: Props) => {
    const {theme} = useTheme();
    const {pathname} = useRouter();
    return (
        <motion.div
            initial={{width: 0}}
            animate={{width: '100vw'}}
            exit={{width: 0, transition: {duration: 1.2}}}
            transition={{
                DURATION: 0.8,
                EASE: [0.83, 0, 0.17, 1],
            }}
            className="fixed top-0 h-screen flex flex-col items-center justify-start bg-white dark:bg-neutral-900 z-40"
        >
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.8, ease: [0.83, 0, 0.17, 1]}}
                className="relative min-h-screen container mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 1, ease: [0.83, 0, 0.17, 1]}}
                    className="border-r-0 sm:border-r-2 mt-24 border-zinc-100 dark:border-neutral-800 col-span-1 sm:col-span-2 flex items-center justify-start"
                >
                    <div className="relative">
                        <span
                            className="relative sm:absolute top-0 sm:top-10 left-0 sm:-left-4 -rotate-90 uppercase font-semibold tracking-widest text-sm">
                            Menu
                        </span>
                        <div className="flex flex-col items-start justify-center mt-4">
                            {ROUTES.map((item, i) => (
                                <Link key={i} href={item.path}>
                                    <motion.div
                                        initial={{opacity: 0}}
                                        animate={{
                                            opacity: 1,
                                            transition: {delay: i * 0.25},
                                        }}
                                        exit={{opacity: 0}}
                                        onClick={() => setIsOpen(false)}
                                        className="my-2 sm:my-3 md:my-4 lg:my-5 ml-0 sm:ml-12 first:mt-2"
                                    >
                                  <span
                                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-wide text-zinc-900 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200  ${
                                          pathname === item.path ? 'font-semibold dark:text-stone-100' : 'font-normal'
                                      }`}
                                  >
                                    {item.name}
                                  </span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="relative w-full mx-auto grid grid-cols-1 grid-rows-2 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-3 xl:grid-rows-3">
                    <div
                        className="relative w-full flex flex-col items-start justify-start sm:justify-end md:justify-end lg:justify-end xl:justify-end pb-0 sm:pb-20 md:pb-20 lg:pb-20 xl:pb-20 row-span-1 sm:row-span-2 md:row-span-2 lg:row-span-2 xl:row-span-2">
                        <span
                            className="mb-6 uppercase font-semibold tracking-widest text-sm">Let&apos;s Contact!</span>

                        <div
                            className="grid w-full grid-cols-4 sm:grid-cols-1 place-items-center sm:place-items-start gap-2.5 mt-0">
                            {networks.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.url}
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: 1,
                                        transition: {delay: i * 0.25},
                                    }}
                                    exit={{opacity: 0}}
                                    className="flex flex-row items-center justify-start"
                                >
                                    <div
                                        className="h-10 w-10 flex items-center justify-center rounded-md mr-0 sm:mr-3 "
                                        style={{background: item.bgColor, color: item.color}}
                                    >
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="hidden sm:block md:block lg:block xl:block">
                                        <span className="text-xs">{item.name}</span>
                                        <p className="text-sm">{item.user}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex flex-col items-start justify-start">
                        <span className="uppercase font-semibold tracking-widest text-sm mb-6">Configuration</span>
                        <div className="w-full grid grid-cols-1">
                            <div className="flex items-center justify-start mb-3">
                                <Theme setIsOpen={setIsOpen}/>
                                <span className="ml-3 text-sm">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Drawer;