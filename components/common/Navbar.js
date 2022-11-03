import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/" passHref>
              <Image
                className="img-fluid"
                src="/nav/Logo.png"
                alt=""
                width={185}
                height={39}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ height: "100%" }}
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/" passHref
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link passHref
                    className="nav-link "
                    aria-current="page"
                    href={"/details/" + 1}
                  >
                    Episodes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about" passHref>
                    About
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                More

                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3"
                                    d="M15.1668 8.49992C15.1668 12.1766 12.1762 15.1666 8.50016 15.1666C4.82416 15.1666 1.8335 12.1766 1.8335 8.49992C1.8335 4.82392 4.82416 1.83325 8.50016 1.83325C12.1762 1.83325 15.1668 4.82392 15.1668 8.49992"
                                    stroke="black" stroke-opacity="0.4" strokeWidth="1.5" />
                                    <path
                                    d="M11.3141 7.5384C11.3141 7.66574 11.2654 7.79374 11.1681 7.89107L8.85472 10.2157C8.76072 10.3097 8.63338 10.3624 8.50005 10.3624C8.36738 10.3624 8.24005 10.3097 8.14605 10.2157L5.83138 7.89107C5.63671 7.69574 5.63671 7.37974 5.83271 7.1844C6.02871 6.98974 6.34538 6.9904 6.54005 7.18574L8.50005 9.1544L10.46 7.18574C10.6547 6.9904 10.9707 6.98974 11.1667 7.1844C11.2654 7.28174 11.3141 7.4104 11.3141 7.5384Z"
                                    fill="black" />
                                </svg>

                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="arrow"></div>
                                <li><a className="dropdown-item" href="pages/news.html">Article & News</a></li>
                                <li><a className="dropdown-item" href="pages/atwork.html">Doodle</a></li>
                                </ul>
                                
                            </li>  */}

                <li className="nav-item position-relative">
                  <Link href="/news" className="nav-link " passHref>
                    News &amp; Blog
                  </Link>
                </li>

                <li className="nav-item position-relative">
                  <Link href="/doodle" className="nav-link " passHref>
                    Doodle
                  </Link>
                </li>

                <li className="nav-item position-relative">
                  <Link href={"/details/" + 1} className="nav-link " passHref>
                    Live <sup className="badge position-absolute">New</sup>
                  </Link>
                </li>
              </ul>

              <div className="right_side_nav ">
                <Link
                  style={{ borderBottom: "3px solid #4A5568" }}
                  className="text-dark fw-bold pb-1 me-4"
                  href={"/episodes/" + 1} passHref
                >
                  RECENT EPISODES
                </Link>
                <Link
                  className="them_btn text-dark yellow_btn text-capitalize"
                  href="" passHref
                >
                  Sign Up
                  <svg
                    className="ms-2"
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7046 0.26716L17.4375 5.00004L12.7046 9.73291L11.9091 8.93739L15.284 5.5625L0.589361 5.5625V4.4375L15.2839 4.4375L11.9091 1.06268L12.7046 0.26716Z"
                      fill="#4A5568"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
