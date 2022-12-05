import Head from 'next/head';
import {useRouter} from 'next/router';

import {metadata} from 'types/seo';

const SEO = ({title, date, description}: metadata) => {
    const {asPath} = useRouter();
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Le Cong Ly"/>
            <meta property="og:url" content={`https://lcl.vercel.app${asPath}`}/>
            <link rel="canonical" href={`https://lcl.vercel.app${asPath}`}/>
            <meta property="og:description" content={description}/>
            <meta name="description" content={description}/>
            {date !== null && <meta property="article:published_time" content={String(date)}/>}
        </Head>
    );
};

export default SEO;