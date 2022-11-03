import ImgCard from "../../components/Card/ImgCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { recentEpisodes } from "../../data/home";

function CatSlider() {

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <>
      <section id="photo_slider">
        <Slider {...settings} className="photo_slider_wrapper">
          {recentEpisodes.length > 0 &&
            recentEpisodes?.map((item) => (
              <ImgCard key={item.id} data={item} />
            ))}
        </Slider>
      </section>
      <div className="gap_64"></div>
    </>
  );
}

export default CatSlider;
