import {Link} from 'react-scroll';

type Props = {
    routes: Array<Route>;
};

type Route = {
    name: string;
    id: string;
};

const ProjectNavigation = ({routes}: Props) => {
    return (
        <div
            className="fixed hidden lg:flex flex-col justify-center items-start top-1/2 -translate-y-1/2 p-3 z-40 backdrop-blur-sm rounded-lg overflow-hidden">
            {routes.map((route, i) => (
                <Link
                    key={i}
                    className="relative my-1 pl-5 text-xs flex items-center justify-start text-zinc-900 dark:text-zinc-100 duration-150 before:duration-150 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:w-4 before:h-4 before:border-2 before:rounded-full before:hover:bg-zinc-600 before:hover:border-zinc-600 dark:before:hover:bg-zinc-100 dark:before:hover:border-zinc-100"
                    to={route.id}
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    activeClass="font-medium before:bg-zinc-900 dark:before:bg-zinc-100 before:border-zinc-900 dark:before:border-zinc-100"
                >
                    {route.name}
                </Link>
            ))}
        </div>
    );
};
export default ProjectNavigation;