import Banner1 from "../components/Banners/Banner1";
import HeroSection from "../components/Home/HeroSection";
import CatSlider from "../components/Home/CatSlider";
import SupportSlider from "../components/Home/SupportSlider";
import Membership from "../components/Home/Membership";
import Episodes from "../components/Home/Episodes";
import Sponsor from "../components/Home/Sponsor";
import Article from "../components/Home/Article";

// import useTitle from "../hooks/useTitle";

function Index() {

    // useTitle('Home');
   
    return (   
      
        <>  
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






