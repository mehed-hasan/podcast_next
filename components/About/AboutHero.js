import Button from "../common/Button";
import Card4 from "../Card/Card4";
import { podcastInfo } from "../../data/about";
import Image from "next/image";

function AboutHero() {
    return ( 
        <>

<section style={{minHeight:'450px'}} id="banner2" className="animated_banner d-flex align-items-center position-relative overflow-hidden first_content">
            <div className="banner2_text text-center mx-auto">
              <h1 className="text-black text-capitalize">
                About <br/>
                <span className="text-brown text-capitalize"> Pod Cast</span>
              </h1>

    
              <p className="my-2 my-md-5 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
              </p>
              <br/>
              <div className="button_group gap-3 d-flex justify-content-center ">
                <Button link={"/#"} btnColors='text-dark yellow_btn' btnText='Subscribe' />
                <Button link={"/#"} btnColors='text-white blue_btn' btnText='BROWSE ALL EPISODES' />
              </div>
            </div>
    
            <Image value="2" className="line position-absolute" src='/images/banner/banner_spring.png' width={300} height={282} alt=""/>
            <Image value="-2"  className="circle img-fluid  position-absolute" src='/images/banner/lines.png' width={400} height={474}  alt=""/>
        </section>

        <div className="gap_64 d-none d-md-block"></div>
        <div className="gap_64 d-none d-md-block"></div>

        <section className="card_group">
            <div className="container">
                <div className="row">
                <Card4 data={podcastInfo} grid='col-12 col-md-4 mb-3 mb-md-0 ' />
                </div>
            </div>


        </section>

        <div className="gap_40"></div>
        
        </>
     );
}

export default AboutHero;