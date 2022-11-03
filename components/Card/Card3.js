import Image from "next/image";



function Card3({data, grid,range}) {


    return ( 
        <>

            {
                data.map((item, index)=>
                item.id < 3 ? 
                
                <div key={item.id}  className={`card3Wrapper ${grid}`}>
                <div className="card card3   p-1 p-md-3" data-aos="fade-right" data-aos-duration="1200">
                <div className="card_body ">
                    <div className="row">
                      <div className="col-6">
                        <div className="left_img h-100 "><Image style={{objectFit:'cover'}} className="w-100 h-100 img-fluid" src={`/images/cards/${item.thbumbnail}`} alt="" width={200} height={200}/></div>
                      </div>
                      <div className="col-6">
                        <div className="card_info d-flex flex-column justify-content-between h-100">
                          <div className="card_top right_img d-flex justify-content-end">
                            <Image className="w-50" src={`/images/cards/${item.image}`} alt={item.image} width={115} height={115}/>
                          </div>
      
                          <div className="card_bottom">
                            <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0">
                              <h6 className="text-black">{item.hosterName}</h6>
                              <h3 className="text-black fw-bold">{item.hostTitle}</h3>
                            </div>
          
                            <div className="card_details mt-1 mt-md-3">
                              <p>{item.details}</p>
                            </div>
        
                            <div className="card_footer d-flex  mt-2 mt-md-4 justify-content-end">
                  
                              <div className="socials align-content-end">
                                <span className="fw-bold">follow me: </span>
                                <span className="social_img">
                                  <a href="#"><Image className="avatar" src='/images/icon/tiktok.png' alt='No image' width={20} height={20}/></a>
                                  <a href="#"><Image className="avatar" src='/images/icon/twitter.png' alt='No image' width={20} height={20}/></a>
                                  <a href="#"><Image className="avatar" src='/images/icon/instagram.png' alt='No image' width={20} height={20}/></a>
                                </span>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                
                </div>
            </div>
                
                :''
               
                )
            }
             
        </>
     );
}

export default Card3;