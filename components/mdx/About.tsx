import {useContext} from 'react';
import {AppContext} from '../../context/AppContext';

type Props = {
    summary: Array<string>;
    tags: Array<string>;
    technologies: Array<string>;
    github_url?: string;
    host_url?: string;
    external_url?: string;
};

const About = ({summary, tags, technologies, external_url, github_url, host_url}: Props) => {
    const {cursorEnter, cursorLeave} = useContext(AppContext);
    return (
        <section className="my-6 text-zinc-900 dark:text-zinc-100" id="about">
            <h2 className="text-3xl font-bold mb-3">Summary</h2>
            <div className="mb-6">
                {summary.map((text, i) => (
                    <p className="text-base leading-7" key={i}>
                        {text}
                    </p>
                ))}
            </div>
            <div className="flex flex-row items-center justify-start mb-3">
                <h3 className="text-lg font-semibold">{tags.length > 1 ? 'Tags' : 'Tag'}:</h3>
                {tags.map((tag, index) => (
                    <span key={index} className="mx-1 font-normal">
            {tag}
          </span>
                ))}
            </div>

            <div className="flex flex-row items-center justify-start mb-3">
                <h3 className="text-lg font-semibold">{technologies.length > 1 ? 'Tools' : 'Tool'}</h3>
                {technologies.map((technology, index) => (
                    <span className="mx-1 first:ml-0 last:mr-0" key={index}>
                        {technology}
                    </span>
                ))}
            </div>

            <div className="flex flex-row items-center justify-start">
                <h3 className="text-lg font-semibold mr-1">Link:</h3>

                {github_url && (
                    <a href={github_url} target="_blank" rel="noreferrer noopener"
                       className="mr-3 hover:scale-105 duration-150"
                       onMouseEnter={() => cursorEnter()}
                       onMouseLeave={() => cursorLeave()}
                    >
                        Github link
                    </a>
                )}

                {host_url && (
                    <a href={host_url} target="_blank" rel="noreferrer noopener"
                       className="mr-3 hover:scale-105 duration-150"
                       onMouseEnter={() => cursorEnter()}
                       onMouseLeave={() => cursorLeave()}
                    >
                        View Demo
                    </a>
                )}

                {external_url && (
                    <a
                        href={external_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mr-3 hover:scale-105 duration-150"
                        onMouseEnter={() => cursorEnter()}
                        onMouseLeave={() => cursorLeave()}
                    >
                        View Link
                    </a>
                )}
            </div>
        </section>
    );
};

export default About;