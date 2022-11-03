// col-12 col-md-6 col-lg-4

import Button from "../common/Button";

function GroupCard({ grid, data }) {
  return (
    <>
      {data.length > 0 && data.map((data) => (
        <div key={data.id} className={`group_card_wrapper ${grid}`}>
          <div className="group_card  mb-3 mb-lg-0">
            <div
              className="card d-flex flex-column gap-5 "
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              <div className="part1 card_heading border-0">
                <h4 className="text-black fw-bold ">{data.title}</h4>
                <p className="mt-3">{data.details}</p>
              </div>

              <div className="button_and_price d-flex align-datas-center justify-content-between">
                <Button
                  link={"/#"}
                  btnColors={
                    data.id === 1
                      ? "blue_btn text-white"
                      : data.id === 2
                      ? "yellow_btn text-dark"
                      : "red_btn text-white"
                  }
                  btnText={"Subscribe"}
                />
                <div>
                  <h5 className="text-brown fw-bold">$ {data.price}</h5>
                  <small className="text-dark  fw-bold">/month</small>
                </div>
              </div>
            </div>

            <div
              className="part2 card mt-4"
              data-aos="wake-up"
              data-aos-duration="1400"
            >
              <h6>What’s included:</h6>
              <div className="features mt-3">
                <ul>
                  {data.features.map((features, index) => (
                    <li
                      key={index}
                      className={
                        data.id === 1
                          ? ""
                          : data.id === (2 && index === 0) ||
                            data.id === (3 && index === 0)
                          ? "text-black fw-bold"
                          : ""
                      }
                    >
                      {data.id + features + index}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GroupCard;
