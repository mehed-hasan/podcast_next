function Card4({grid,data}) {



    return ( 
        <>
            {
                data.map((item) => 
                <div key={item.id} className={`card4Wrapper ${grid}`}>
                    <div className="card card4  d-flex flex-column gap-4" data-aos="fade-right" data-aos-duration="1200">
                            <div className="container">
                                <div className="card4_heading text-center mb-4">
                                    <h2 className="fw-bold"><span className={item.id === 1 ? 'text_second_color':item.id ===2? 'text_first_color':'text_third_color'}>{item.amount}</span> <span className="text-dark">K</span></h2>
                                </div>
                    
                                <div className="card4_details text-center">
                                    <p className="text-dark">{item.title}</p>
                                </div>
                            </div>
                       </div>
                </div>
                )
            }
        </>
     );
}

export default Card4;