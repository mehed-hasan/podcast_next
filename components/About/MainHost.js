import { hostInfo } from "../../data/about";
import Card3 from "../Card/Card3";

function MainHost() {
    return ( 

        <>
        
        <section id="founder">
            <div className="heading_group text-center">
              <h2 className="heading_3 text-black">Founder and Main Host</h2>
            </div>
            <div className="gap_64"></div>
            <div className="container">
              <div className="row">
                <Card3 grid='col-12 col-md-6 mb-3 mb-md-0' data={hostInfo} range={2}  />
              </div>
            </div>
          </section>
        </>
     );
}

export default MainHost;