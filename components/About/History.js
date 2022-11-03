import { history } from "../../data/about";
import HeadingGroup from "../HadingGroup";

function History() {




    return ( 
        <>
<section id="history">

<HeadingGroup heading='About and History' subheading=''/>
<div className="gap_64"></div>
<div className="container">
<div className="history_wrapper">
                <div className="row">
                  {
                    history.map((item,index)=>
                    <div key={index} className="col-12 col-md-6">
                    <div className="history_text">
                      <p dangerouslySetInnerHTML={{__html:item}}></p>
                    </div>
                    </div>
                    )
                  }
                 </div>
              </div>
</div>
</section>

<div className="gap_64"></div>
        </>
     );
}

export default History;