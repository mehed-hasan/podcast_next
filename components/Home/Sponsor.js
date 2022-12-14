import GroupCard from "../../components/Card/GroupCard";
import HeadingGroup from "../../components/HadingGroup";
import { sponsorData } from "../../data/home";

function Sponsor() {
  return (
    <>
      <section id="sponsor">
        <div className="gap_64"></div>
        <svg
          className="chorki star"
          width="147"
          height="153"
          viewBox="0 0 147 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.9887 4.87672C53.3442 -0.705837 61.4555 -0.155127 62.044 5.5594L65.6395 40.4751C66.0381 44.3452 70.4411 46.3701 73.6387 44.1538L109.872 19.0398C114.413 15.8926 120.026 21.1847 117.152 25.9027L99.5972 54.7149C97.7956 57.672 99.3924 61.5272 102.757 62.3443L142.68 72.0374C147.588 73.2291 147.98 80.0588 143.24 81.8045L102.008 96.991C98.8376 98.1586 97.651 102.025 99.6203 104.77L115.053 126.281C118.301 130.807 112.996 136.527 108.238 133.628L80.2851 116.597C77.328 114.796 73.4728 116.392 72.6557 119.757L65.7196 148.325C64.3741 153.866 56.3387 153.379 55.6724 147.716L50.7185 105.607C50.246 101.591 45.5186 99.6866 42.3941 102.254L15.36 124.467C10.8054 128.21 4.57888 122.546 7.87398 117.658L33.0832 80.2626C35.4422 76.7633 32.7859 72.0742 28.5717 72.2984L5.65256 73.5178C-0.451023 73.8426 -1.87764 65.1227 4.0112 63.4854L23.5438 58.0546C27.1391 57.055 28.4874 52.6655 26.073 49.82L8.79029 29.4511C5.0341 25.0242 10.3917 18.7556 15.3497 21.7763L37.7149 35.4028C40.672 37.2044 44.5272 35.6076 45.3443 32.2426L51.9887 4.87672Z"
            fill="#FF6C6C"
          />
        </svg>
        <svg
          className="spring"
          width="124"
          height="124"
          viewBox="0 0 124 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.3474 2C76.4722 11.0172 63.6396 29.7092 31.2177 32.9779C-0.450531 36.1705 74.6031 3.02726 97.5111 17.6517C124.289 34.7467 -8.1881 84.113 8.77193 64.9345C18.2604 54.205 106.907 33.3564 106.907 50.2606C106.907 71.7648 8.77179 104.986 2.66813 97.3922C-8.09955 83.9963 114.757 54.8902 121.001 72.7607C128.447 94.07 50.0547 119.321 35.4387 111.169C23.7459 104.647 110.256 89.7993 122 122"
            stroke="#5F5FFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <HeadingGroup
          heading={"Become our sponsor"}
          subheading={"Get exclusive episodes, merch and more"}
        />

        <div className="gap_40"></div>
        <div className="container">
          <div className="row">
            <GroupCard grid={"col-12 col-md-6 col-lg-4"} data={sponsorData} />
          </div>
        </div>
        <div className="gap_64"></div>
      </section>
    </>
  );
}

export default Sponsor;
