import "../styles/globals.css";
import './../components/common/common.css'
// import "../js/test.js";
// import "../js/parallax.js";
import Layout from "../layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "../styles/about.module.css";
import "../styles/parallax.module.css";
import '../styles/news.module.css';
import '../styles/doodle.module.css';
import '../styles/episode.module.css';

function MyApp({ Component, pageProps }) {
  // data aos
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // bootstrap
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
