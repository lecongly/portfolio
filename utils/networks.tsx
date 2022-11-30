import {BsGithub, BsLinkedin, BsInstagram, BsFacebook} from 'react-icons/bs';

export const networks = [
    {
        url: 'https://github.com/lecongly',
        icon: <BsGithub/>,
        name: 'Github',
        user: '@lecongly',
        bgColor: '#F8F8F8',
        color: '#000000',
    },
    {
        url: 'https://www.linkedin.com/in/lecongly/',
        icon: <BsLinkedin/>,
        name: 'Linkedin',
        user: 'Công Lý Lê',
        bgColor: '#0A66C2',
        color: '#FFFFFF',
    },
    {
        url: 'https://www.instagram.com/_lecongly/',
        icon: <BsInstagram/>,
        name: 'Instagram',
        user: '@_lecongly',
        bgColor:
            'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        color: '#FFFFFF',
    },
    {
        url: 'https://www.facebook.com/iAmLCL/',
        icon: <BsFacebook/>,
        name: 'Facebook',
        user: 'Lê Công Lý',
        bgColor: '#2374E1',
        color: '#FFFFFF',
    },
];