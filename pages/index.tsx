import Layout from '@components/layout';
import Banner from '@components/homepage/Banner';
import Projects from '@components/projects/Projects';

export default function Home() {
    return (
        <Layout>
            <Banner/>
            <Projects/>
            <div className="h-screen"></div>

        </Layout>
    );
}
