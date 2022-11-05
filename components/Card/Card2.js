import Image from "next/image";
import BorderedBtn from "../common/BorderdBtn";

function Card2({ grid, data }) {
  return (
    <>
      {data.length > 0 ? (
        data?.map((data) => (
          <div key={data.id} className={`card2_wrapper ${grid}`}>
            <div
              className="card card2 p-2 p-md-3 mb-4 mb-lg-0 "
              data-aos="flip-left"
              data-aos-duration="1200"
            >
              <div className="card_body ">
                <div className="row">
                  <div className="col-12 ">
                    <div className="left_img">
                      <Image
                        className="w-100 img-fluid"
                        src={`/images/cards/${data.thumbnail}`}
                        alt=""
                        width={534}
                        height={315}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card_info">
                      <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0">
                        <h5 className="text-uppercase mt-1 mt-md-3 fw-bold">
                          {data.category}
                        </h5>
                        <h3 className="text-brown fw-bold ">{data.title}</h3>
                      </div>

                      <div className="card_details mt-1 mt-md-3">
                        <p>{data.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_footer d-flex flex-wrap justify-content-between mt-2 mt-md-4 gap-2">
                <div className="tag_group gap-2">
                  {data.tags.length > 0 && data.tags?.map((tag) => (
                    <BorderedBtn
                      key={tag.id}
                      link={tag.taglink}
                      btnText={tag.tagName}
                    />
                  ))}
                </div>

                <div className="date">
                  <p className="fw-bold">{data.publishedDate}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center mt-5"> No posts in this category !</h5>
      )}
    </>
  );
}

export default Card2;
