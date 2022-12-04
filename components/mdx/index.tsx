import Image from 'next/image';

import Introduction from './Introduction';
import ProjectNavigation from './ProjectNavigation';
import About from './About';
import Challenges from './Challenges';
import Wireframe from './Wireframe';
import UserFlow from './UserFlow';

const MDXComponents = {
    img: (props: any) => <Image
        width={768}
        height={432}
        className="object-contain"
        quality={100}
        alt="image" {...props} />,
    // <- General ->
    Introduction,
    About,
    Challenges,
    ProjectNavigation,
    UserFlow,
    Wireframe,
};

export default MDXComponents;