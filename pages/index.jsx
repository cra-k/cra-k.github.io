import Layout from "../components/layout";
import { getHomePageData } from "../lib/posts";

export function getStaticProps({ params }) {
    const { pageMetadata, pageContent } = getHomePageData();
    return {
        props: {
            metadata: pageMetadata,
            data: pageContent,
            navigation: {
                prev: "/#",
                next: "/formations/git-github",
            },
        },
    };
}

export default function Home({ metadata, data, navigation }) {
    return (
        <>
            <div className="root" id="app">
                <Layout
                    metadata={metadata}
                    data={data}
                    navigation={navigation}
                />
            </div>
        </>
    );
}
