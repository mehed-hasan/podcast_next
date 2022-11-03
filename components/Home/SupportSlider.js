import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { supporters } from "../../data/home";
import Image from "next/image";

function SupportSlider() {
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <div id="support_slider">
        <h4 className="fw-bold text-center mb-3 text-black"> Supported by: </h4>
        <Slider {...settings2} className="support_slider_wrapper ">
          {supporters.length > 0
            && supporters?.map((item) => (
                <div key={item.id}>
                  <Image
                    className="img-fluid"
                    src={`/images/icon/${item.image}`}
                    alt={item.image}
                    width={120}
                    height={36}
                  />
                </div>
              ))}
        </Slider>
      </div>

      <div className="gap_64"></div>
    </>
  );
}

export default SupportSlider;
