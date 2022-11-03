// import shopifyIcon from '../../components/images/icon/spotify_white.png'
// import podcastIcon from '../../components/images/icon/podcast_white.png'
// import youtubeIcon from '../../components/images/icon/youtube_white.png'
import BorderedBtn from "../common/BorderdBtn";
import Link from "next/link";
import Image from "next/image";

function card1({ data }) {
  return (
    <>
      {data.length > 0 ? (
        data?.map((data) => (
          <div
            key={data.id}
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div  className="card card1 p-2 p-md-3 mb-3">
        
              
                  <div className="card_body ">
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <div className="left_img">
                          <div className="card_links d-flex gap-3">
                            <Link href="#" passHref>
                              <Image
                                src="/images/icon/podcast_white.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="" passHref>
                              <Image
                                src="/images/icon/podcast_white.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                            <Link href="" passHref>
                              <Image
                                src="/images/icon/podcast_white.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </Link>
                          </div>
                          <Image
                            className="w-100 img-fluid"
                            src={`/images/cards/${data.cardThumbnail}`}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-8">
                        <div className="card_info">
                          <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0">
                            <h5 className="text-brown fw-bold">
                              Eps. {data.episode_no}
                            </h5>
                            <h3 className="text-black fw-bold">{data.title}</h3>
                          </div>
                          <div className="card_details mt-1 mt-md-3">
                            <p className="text-dark">{data.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card_footer d-flex justify-content-between mt-2 mt-md-4">
                    <div className="btn_group d-flex gap-1">
                      {/* <Link href="#" className="bordered_btn" passHref>mind-behaviour</Link> */}
                      {/* <BorderedBtn link={data.link1} btnText={"mind-behaviour"} />
                            <BorderedBtn link={data.link2} btnText={"health"} /> */}
                    </div>
                    <div className="hosters">
                      <span className="fw-bold text-black">Hosted by: </span>
                      <span className="hosters_img">
                        {data.hoster.map((hosters) => (
                          <Link
                            key={hosters.id}
                            href={hosters.profileLink}
                            passHref
                          >
                            <Image
                              className="avatar"
                              src={`/images/avatar/${hosters.image}`}
                              alt=""
                              width={30}
                              height={30}
                            />
                          </Link>
                        ))}
                      </span>
                    </div>
                  </div>
       
              
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center mt-5"> No episodes in this category !</h5>
      )}
    </>
  );
}

export default card1;
