
import Image from "next/image";
import { history } from "../../data/about";

function doodleRoom() {
    return ( 

        <>
            <section id="doodle">
            <div className="img_wrapper text-center">
                <Image className="img-fluid " data-aos="zoom-in"  src='/images/banner/section_img.png' alt="" width={996} height={447}/>
            </div>
            <div className="gap_64"></div>
            <div className="heading_group text-center">
                <div className="heading_3 text-black">Doodle for our podcast background room</div>
            </div>
            <div className="gap_40"></div>
            
            <div className="container">
                <div className="row">
                {
                    history.length> 0 ? history.map((item,index)=>
                    <div key={index} className="col-12 col-md-6">
                    <div className="history_text">
                      <p dangerouslySetInnerHTML={{__html:item}}></p>
                    </div>
                    </div>
                    )
                    :
                    "Empty"
                  }
                </div>
            </div>
        </section>
        </>
     );
}

export default doodleRoom;