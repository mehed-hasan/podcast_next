import Head from "next/head";
import Banner1 from "../components/Banners/Banner1";
import LatestPost from "../components/News/LatestPost";
import NewsHero from "../components/News/NewsHero";


function News() {


    return ( 

        <>  
            <Head><title>Podcast || News</title></Head>
            <NewsHero/>
            <LatestPost/>
            <Banner1/>
        </>
     );
}

export default News;