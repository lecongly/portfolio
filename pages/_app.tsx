import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {AnimatePresence} from 'framer-motion';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import {AppProvider} from 'context/AppContext';

export default function App({Component, pageProps: {...pageProps}, router}: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <AppProvider>
                <Header/>
                <AnimatePresence initial={false}>
                    <Component {...pageProps} key={router.asPath}/>
                </AnimatePresence>
                <Footer/>
            </AppProvider>
        </ThemeProvider>

    );

}
