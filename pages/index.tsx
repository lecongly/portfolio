import Layout from '@components/layout';
import Banner from '@components/homepage/Banner';

export default function Home() {
    return (
        <Layout>
            <Banner/>
            <div className="h-screen"></div>
        </Layout>
    );
}
