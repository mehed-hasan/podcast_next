import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";

function Banner1() {
  const banner1Infos = {
    verson: "Beta",
    title: "Available now Pod of Cast App",
    subTitle: "We just launched our podcast app!",
  };

  return (
    <>
      <section id="app_ad">
        <div className="gap_32"></div>
        <div className="banner1 position-relative overflow-hidden">
          <div
            style={{ gap: "100px" }}
            className="banner_el_wrapper d-flex flex-column "
          >
            <div className="banner_text text-center text-center">
              <div className="red_badge mx-auto">{banner1Infos.verson}</div>
              <h2 className="text-black mx-auto">{banner1Infos.title}</h2>

              <p className="text-dark mt-2">{banner1Infos.subTitle}</p>
            </div>

            <div className="banner_actions text-center">
              <div>
                <Button
                  link={"/#"}
                  href="ff"
                  btnColors={"yellow_btn text-dark"}
                  btnText={"Download Now"}
                />

                <p className="text-dark mt-4">Content also available on:</p>
              </div>

              <div className="mt-3 d-flex justify-content-center gap-2">
                <Link href="/#" passHref>
                  <Image
                    src="/images/icon/podcast.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="/#" passHref>
                  <Image
                    src="/images/icon/spotify.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="/#" passHref>
                  <Image
                    src="/images/icon/youtube.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </div>
          </div>

          <Image
            className="l_moving_img"
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            src="/images/icon/podcast.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="r_moving_img"
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            src="/images/icon/podcast.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </section>
    </>
  );
}

export default Banner1;
