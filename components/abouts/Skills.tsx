import React from 'react';
import SKILLS from 'utils/skills.json';

const Skills = () => {
    return (
        <div className="w-full block md:grid md:grid-cols-4 lg:grid-cols-6 mt-10" id="skills">
            <div className="xs:flex xs:items-center xs:justify-center md:block ">
                <h2 className="relative text-2xl font-semibold mb-5">Skills</h2>
            </div>
            <div className="col-span-5 grid grid-cols-1 md:grid-cols-3  gap-5 ">
                {SKILLS.map((item, i) => (
                    <div key={i} className="px-4 ">
                        <h3 className="text-lg mb-2 text-center">{item.name}</h3>
                        <div
                            className="w-full grid grid-cols-2 sm:grid sm:grid-cols-3 md:flex md:flex-col md:items-start md:justify-center lg:flex lg:flex-col lg:items-start lg:justify-center">
                            {item.skills.map((skill, i) => (
                                <span
                                    className="text-sm my-0.5 relative pl-3 before:content-[''] before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-pink-500 before:dark:border-violet-500"
                                    key={i}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;