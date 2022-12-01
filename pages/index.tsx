import Layout from '@components/layout';
import Banner from '@components/homepage/Banner';
import Projects from '@components/projects/Projects';
import QuickAbout from '@components/abouts/QuickAbout';

export default function Home() {
    return (
        <Layout>
            <Banner/>
            <QuickAbout/>
            <Projects/>
            <div className="h-screen"></div>

        </Layout>
    );
}
