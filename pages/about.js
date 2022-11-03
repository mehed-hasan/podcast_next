import AboutHero from "../components/About/AboutHero";
import Comments from "../components/About/Comments";
import Contact from "../components/About/Contact";
import History from "../components/About/History";
import Inspiration from "../components/About/Inspiration";
import Listeners from "../components/About/Listeners";
import MainHost from "../components/About/MainHost";
import Banner1 from "../components/Banners/Banner1";

import SupportSlider from "../components/Home/SupportSlider";
import useTitle from "../hooks/useTitle";

function About() {

   useTitle('About Us');

    return ( 
        <>
           <AboutHero/>
           <SupportSlider/>
           <Listeners/>
           <History/>
           <MainHost/>
           <Inspiration/>
           <Comments/>
           <Contact/>
           <Banner1/>
        </>
     );
}

export default About;