import Banner1 from "../components/Banners/Banner1";
import HeroSection from "../components/Home/HeroSection";
import CatSlider from "../components/Home/CatSlider";
import SupportSlider from "../components/Home/SupportSlider";
import Membership from "../components/Home/Membership";
import Episodes from "../components/Home/Episodes";
import Sponsor from "../components/Home/Sponsor";
import Article from "../components/Home/Article";
import Head from "next/head";


function Index() {

   
    return (   
      
        <>  <Head><title>Podcast || Home</title></Head>
            <HeroSection/>
            <CatSlider />
            <SupportSlider/>
            <Membership/> 
            <Episodes/>
            <Sponsor/>
            <Article/>
            <Banner1/>
        </>
     );
}

export default Index;






