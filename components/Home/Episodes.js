import Card1 from "../../components/Card/Card1";
import Button from "../../components/common/Button";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeadingGroup from "../../components/HadingGroup";
import { recentEpisodes } from "../../data/home";


function Episodes() {
    return ( 
        <>
        <section id="episods">
        <div className="gap_64"></div>
        <HeadingGroup heading={'Recent Episodes'} subheading={'Available on your favorite platforms'}/>
        <div className="gap_64"></div>
        <div className="container">
          <div className="row">
            <Card1  data={recentEpisodes} />
          </div>
        </div>
        <div className="gap_64"></div>
        <div className="btn_wrapper text-center">
          <Button link={"/#"} btnColors={'yellow_btn text-dark'}  btnText={'Browse All Episodes'}/>
        </div>
        <div className="gap_64"></div>
       </section>
        </>
     );
}

export default Episodes;