import Comments from "../components/About/Comments";
import Banner1 from "../components/Banners/Banner1";
import DoodleBanner from "../components/Doodle/DoodleBanner";
import DoodleRoom from "../components/Doodle/DoodleRoom";
import DoodleSection from "../components/Doodle/DoodleSection";
import Article from "../components/Home/Article";
import LatestPost from "../components/News/LatestPost";


function Doodle() {



    return ( 

        <>
         <DoodleBanner/>
         <DoodleRoom/>
         <LatestPost/>
         <Comments/>
         <DoodleSection/>
         <Article/>
         <Banner1/>
        </>
     );
}

export default Doodle;