import Image from "next/image";
import Link from "next/link";
import BorderedBtn from "../common/BorderdBtn";

function ImgCard({ data, hasShadowBlue, isPlaying }) {

  return (
    <div key={data.id} className="img_card_wrapper">
      <div
        className={`img_card ${hasShadowBlue}`}
        style={{ backgroundImage:`url(/images/cards/${data.cardThumbnail})`}} 
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <div className="overlay">
          <div className="card_links d-flex gap-3">
            <Link href="" passHref>
              <Image src="/images/icon/spotify_white.png" alt="" width={27} height={27}/>
            </Link>
            <Link href="" passHref>
              <Image src="/images/icon/podcast_white.png" alt="" width={27} height={27}/>
            </Link>
            <Link href="" passHref>
             <Image src="/images/icon/youtube_white.png" alt="" width={27} height={27}/>
            </Link>
           
          </div>

          <h5 className="caption text-white">{data.cat}</h5>
          <Image
            className="play"
            
            src={isPlaying ? "/images/icon/play.gif" : "/images/icon/pause.png"}
            alt=""
            width={70} height={100}
          />
        </div>
      </div>

      {hasShadowBlue ? (
        <div className="btn_group tags ms-3 mt-4 ml-2 pb-2">
          <div className="d-flex gap-1">
            <span className="fw-bold">Tags : </span>

            <BorderedBtn link={data.link1} btnText={"mind-behaviour"} />
            <BorderedBtn link={data.link2} btnText={"health"} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ImgCard;
