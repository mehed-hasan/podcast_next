import Image from "next/image";
import Button from "../../components/common/Button";

function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="animated_banner d-flex align-items-center position-relative overflow-hidden first_content"
      >
        <div className="hero_text text-center mx-auto">
          <h1>
            <span className="text1">Talk, </span>
            <span className="text2">Publish</span> and
            <span className="text2">Spread Love</span> to Others can Change the
            World
          </h1>

          <p className="mt-2 mt-md-5">
            We cover all kinds of categories and a weekly special guest.
          </p>
          <br />
          <Button
            link={"/#"}
            btnColors={"yellow_btn text-dark"}
            btnText={"Subscribe"}
          />
        </div>

        <Image
          value="2"
          className="line position-absolute"
          src="/images/banner/lines.png"
          alt=""
          width={400}
          height={474}
        />
        <Image
          value="-2"
          className="circle img-fluid  position-absolute"
          src="/images/banner/circle.png"
          alt=""
          width={257}
          height={253}
        />
      </section>
      <div className="gap_64"></div>
    </>
  );
}

export default HeroSection;
