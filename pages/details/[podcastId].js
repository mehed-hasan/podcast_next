import { useRouter } from "next/router";

import { recentEpisodes } from "../../data/home";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImgCard from "../../components/Card/ImgCard";
import LatestEpisodes from "../../components/Episode/LatestEpisodes";
import Banner1 from "../../components/Banners/Banner1";
import Head from "next/head";

function EpisodeInfo() {
  const router = useRouter();
  let podcast = router.query.podcastId;
  const [data, setData] = useState({});

  const [isPlaying, setisPlaying] = useState(false);

  //   const data =   recentEpisodes.find(item => {return item.id == podcastId});
  console.log(data);

  useEffect(() => {
    if (podcast !== "undefined") {
      setData(recentEpisodes.find((item) => item.id == podcast));
    }
    const audio = new Audio("/audio/test.mp3");
  }, [podcast, data]);

  // console.log(singleEpisode);
  const play = () => {
    if (isPlaying) {
      setisPlaying(false);
      audio.pause();
      console.log("paused");
    } else {
      setisPlaying(true);
      audio.play();
      console.log("played");
    }
  };

  return (
    <>
    <Head><title>Podcast || Details - {data.id} </title></Head>
      {data ? (
        <>
          <div className="gap_64"></div>
          <section id="episod_banner" className="first_content">
            <div className="container">
              <div className="episod_wrapper">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <ImgCard
                      isPlaying={isPlaying}
                      hasShadowBlue={"has_shadow_blue"}
                      data={data}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <div
                      style={{ minHeight: "auto" }}
                      className="card banner_card p-1 p-md-3 border-0"
                    >
                      <div className="card_body ">
                        <div className="row">
                          <div className="col-12">
                            <div className="card_info">
                              <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0 mb-4">
                                <div className="eps_name d-flex align-items-center justify-content-between mb-2">
                                  <h5 className="text_first_color fw-bold ">
                                    Eps. {data ? data.episode_no : ""}
                                  </h5>
                                  <div className="badge text_first_color">
                                    FEATURED EPISODE
                                  </div>
                                </div>
                                <h3 className="text-black fw-bold">
                                  {data ? data.title : ""}
                                </h3>
                              </div>

                              <div className="card_details mt-1 mt-md-3">
                                <p>{data ? data.details : ""}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card_footer d-flex justify-content-between mt-2 mt-md-4">
                        <div className="hosters">
                          <span className="hosters_img">
                            <a href="">
                              <Image
                                className="avatar"
                                src="/images/avatar/avatar1.png"
                                alt=""
                                width={25}
                                height={25}
                              />
                            </a>
                          </span>
                          <span className="fw-bold">Hosted by: </span>
                          <span className="text_first_color fw-bold">
                            {data ? data.hostedBy : ""}
                          </span>
                        </div>
                      </div>

                      <div className="btn_group mt-5 d-flex gap-3">
                        <a className="them_btn text-dark yellow_btn" href="">
                          SUBSCRIBE
                        </a>
                        <button
                          onClick={play}
                          style={{ backgroundColor: "transparent" }}
                          className="them_btn  blue_btn d-flex align-items-center listen"
                          href="#"
                        >
                          <Image
                            src={
                              isPlaying
                                ? "/images/icon/pause_icon.png"
                                : "/images/icon/play_icon.png"
                            }
                            alt=""
                            width={100}
                            height={100}
                          />
                          <span className="text-white btn_text">LISTEN </span>{" "}
                          <span className="text_first_color ms-1">
                            {" "}
                            ( 46 min )
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="gap_96"></div>
          <LatestEpisodes />
          <Banner1 />
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default EpisodeInfo;
