import ServiceCard from "../../components/Card/ServiceCard";
import Button from "../../components/common/Button";
import HeadingGroup from "../../components/HadingGroup";
import { services } from "../../data/home";

function Membership() {
//   console.log(services);
  return (
    <>
      <section id="memberships">
        <div className="container">
          <HeadingGroup
            heading={"Membership benefits"}
            subheading={"Become our sponsor and get all benefits"}
          />

          <div className="gap_40"></div>

          <div className="row">
            <ServiceCard data={services} grid={"col-12 col-md-6 col-lg-4"} />
          </div>

          <div className="gap_40"></div>
          <div className="btn_wrapper text-center">
            <Button
              btnColors={"yellow_btn text-dark"}
              btnText={"Set Pricing"}
            />
          </div>
        </div>
        <div className="gap_64"></div>
      </section>
    </>
  );
}

export default Membership;
