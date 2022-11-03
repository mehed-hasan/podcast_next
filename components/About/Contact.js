function Contact() {
    return (
        <>
        <section id="contact">
            <div className="container">
              <div className="gap_64"></div>
            <div className="heading_group text-center">
              <h2 className="heading_3 text-black">Get in touch</h2>
              <h6 className="sub_heading mt-2">Send your message to us</h6>
              <div className="gap_40"></div>            
            </div>

            <div className="form">
              <hr/>
              <div className="gap_40"></div>
              <div className="row">
                <div className="col-12 col-md-6">
                   <div className="form_group mb-4">
                    <label for="">Full name <sup className="text_first_color">*</sup></label>
                    <input placeholder="Name" className="form-control" type="text" name="" id=""/>
                   </div>
                   <div className="form_group mb-4">
                    <label for="">Email <sup className="text_first_color">*</sup></label>
                    <input placeholder="johndoe@gmail.com" className="form-control" type="text" name="" id=""/>
                   </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form_group mb-4">
                    <label for="">Phone <sup className="text_first_color">*</sup></label>
                    <input placeholder="Phone" className="form-control" type="text" name="" id=""/>
                   </div>
                   <div className="form_group mb-4">
                    <label for="">Subject <sup className="text_first_color">*</sup></label>
                    <input placeholder="Subject..." className="form-control" type="text" name="" id=""/>
                   </div>
                </div>
                <div className="col-12">
                  <label for="">Message <sup className="text_first_color">*</sup></label>
                  <textarea placeholder="Your message goes here..." className="form-control" name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
             <div className="gap_64 d-none d-md-block"></div>
             <div className="submit_wrapper d-flex align-items-center justify-content-between">
              <p className="d-none d-md-block">required <span className="text_first_color">*</span></p>
              <a className="them_btn yellow_btn text-dark mt-4 mt-md-0" href="">SEND MESSAGE</a>
              <div className="d-none d-md-block">
                <p>Viverra at port</p>
                 <p>accumsan. <a className="text_first_color text-decoration-underline" href="">Orci non</a></p>
              </div>
             </div>

             <svg className="svg1 animate_star" width="64" height="68" viewBox="0 0 64 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="ele" d="M62.6584 19.741C63.0782 20.2014 63.1323 20.8785 62.8073 21.4201C62.5094 21.9212 62.2521 22.3545 61.9542 22.7607C58.8667 27.0399 57.174 29.2743 54.1271 33.5805C53.3553 34.6639 51.4865 37.9816 50.7688 39.1191C50.7553 39.1326 50.7553 39.1462 50.7417 39.1597C50.0917 40.1347 48.4938 40.067 47.9792 38.9972C47.9792 38.9972 47.9792 38.9837 47.9657 38.9837C47.2073 37.318 46.598 35.5982 45.8938 33.9055C43.9573 29.2337 41.2626 25.1847 36.7803 22.5305C35.1553 21.5691 35.1282 20.8649 36.3875 19.4701C36.8615 18.9555 37.3355 18.4274 37.85 17.967C42.8198 13.5389 46.2459 8.06804 48.8053 1.97429C48.9678 1.59512 49.2928 1.2972 49.6448 0.999288C50.1053 0.620122 50.7688 0.674289 51.175 1.10762C51.5136 1.45971 51.825 1.83887 52.0146 2.25866C52.4344 3.23366 52.5428 4.33054 52.8 5.37325C54.1813 11.0472 57.2553 15.5701 61.9271 19.0503C62.1844 19.2399 62.4146 19.4837 62.6584 19.741ZM50.2136 6.14512C48.6021 8.82637 47.248 11.5889 45.4063 13.9993C43.524 16.4503 41.1678 18.5357 39.0146 20.7972C44.4855 24.0743 47.6542 29.2607 49.5636 35.6253C52.3667 29.8295 56.2396 25.2253 60.4917 20.9191C53.775 15.8003 52.1771 13.4847 50.2136 6.14512Z" fill="black"/>
              <path className="ele" d="M11.5927 66.4733C10.3605 62.9795 9.29066 59.4181 7.9365 55.9785C6.60941 52.6472 4.63233 49.6816 1.78858 47.3931C0.745871 46.5535 0.772954 45.7951 1.62608 44.8472C6.41983 39.6337 10.1032 33.7295 12.7438 27.1618C13.0282 26.4576 13.7865 25.3337 14.3146 25.3337C15.75 24.9951 16.2646 27.7983 16.3188 28.0556C17.524 34.6639 21.6136 39.4712 26.2042 43.967C27.6938 45.4295 27.8157 45.8764 26.3532 47.2847C20.8417 52.566 17.1855 59.066 14.0438 65.9045C13.0552 68.2879 11.7417 66.8931 11.5927 66.4733ZM3.44066 45.7816C6.36566 47.6368 8.30212 50.1149 9.71046 52.9181C11.0782 55.667 12.0802 58.5785 13.2177 61.3681C15.8448 55.491 19.3927 50.0608 24.7823 45.9306C19.5688 41.8274 15.4521 37.142 14.1927 30.4253C11.9313 36.4649 8.34275 41.4889 3.44066 45.7816Z" fill="#81ADC8"/>
              <path className="ele" d="M48.602 51.9025C45.6093 55.9244 43.7812 60.515 42.102 65.1869C41.9937 65.4848 41.6416 67.1775 40.3551 67.164C39.9895 67.164 39.3801 66.5817 39.1499 66.1213C38.1343 64.0494 37.4978 61.7338 36.2114 59.865C34.6947 57.6442 32.6093 55.8161 30.8489 53.7713C30.5916 53.4734 30.4968 52.7963 30.6593 52.4307C30.9708 51.7536 31.526 51.2119 31.9593 50.589C34.1666 47.339 36.3333 44.0619 38.6083 40.8661C39.0822 40.2025 40.0166 39.4036 40.5718 39.4036C41.953 39.39 42.2239 40.4734 42.4676 41.2452C43.578 44.7932 45.4874 47.7588 48.2635 50.2098C49.252 51.1307 48.7239 51.74 48.602 51.9025ZM33.3947 52.8369C36.6176 55.1254 38.8114 58.4296 40.1385 62.1265C42.102 58.5244 44.1062 54.8546 46.1645 51.0629C43.402 49.1536 41.4791 45.5921 40.5989 42.965C38.1885 46.2692 35.8051 49.5327 33.3947 52.8369Z" fill="#CD4631"/>
              </svg>

              <svg className="svg2" width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.3474 2C76.4722 11.0172 63.6396 29.7092 31.2177 32.9779C-0.450531 36.1705 74.6031 3.02726 97.5111 17.6517C124.289 34.7467 -8.1881 84.113 8.77193 64.9345C18.2604 54.205 106.907 33.3564 106.907 50.2606C106.907 71.7648 8.77179 104.986 2.66813 97.3922C-8.09955 83.9963 114.757 54.8902 121.001 72.7607C128.447 94.07 50.0547 119.321 35.4387 111.169C23.7459 104.647 110.256 89.7993 122 122" stroke="#CD4631" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
                
            </div>
            </div>

              
          </section>

        </>
    );
}

export default Contact;