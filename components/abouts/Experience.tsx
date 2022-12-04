import React, {useContext} from 'react';
import EXPERIENCE from 'utils/experience.json';
import {AppContext} from '../../context/AppContext';

const Experience = () => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    return (
        <div className="w-full block md:grid md:grid-cols-4 lg:grid-cols-6">
            <div>
                <h2 className="relative text-2xl font-semibold mb-5">Experience</h2>
            </div>
            <div className="col-span-5">
                {EXPERIENCE.map((item, i) => (
                    <div
                        key={i}
                        className="relative my-4 pb-3 border-b-2 dark:border-zinc-700 last:border-b-0 first:mt-0 last:mb-0"
                    >
                        <div className="flex items-center justify-start w-full h-6">
                          <span
                              className="bg-white dark:bg-zinc-900 text-xs tracking-wider border-2 dark:border-zinc-700 rounded-md px-2 py-1">
                            {item.date}
                          </span>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="ml-6 text-base tracking-wide font-medium text-pink-500 dark:text-violet-500"
                                onMouseEnter={() => cursorEnter()}
                                onMouseLeave={() => cursorLeave()}
                            >
                                @{item.company}
                            </a>
                        </div>
                        <h3 className=" text-xl font-medium my-2">{item.role}</h3>
                        <ul>
                            {item.activities.map((activity, i) => (
                                <li className="text-base mb-2 list-decimal list-inside last:mb-0 font-normal" key={i}>
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;