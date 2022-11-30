import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {AnimatePresence} from 'framer-motion';
import Header from '@components/layout/Header';

export default function App({Component, pageProps: {session, ...pageProps}, router}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Header/>
            <AnimatePresence initial={false}>
                <Component {...pageProps} key={router.asPath}/>
            </AnimatePresence>
            {/*<Component {...pageProps} />*/}
        </ThemeProvider>

    );

}
