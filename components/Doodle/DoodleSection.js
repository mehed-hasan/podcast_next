import Image from 'next/image';
function DoodleSection() {
    return ( 

        <>
                  <section id="doodle">

<div className="gap_40"></div>

<div className="container">
    <div className="row">
        <div className="col-12 col-md-6">
          <div className="chart">
            <ul>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis curs
                    us dignissim odio. Sit vulputate et integer in.
                </li>

                <li>
                    Lorem ipsum dolor sit amet, <b>consectetur adipiscing </b> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <b>Amet</b> interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget. 
                    Viverra at porttitor accumsan. <a className="text-black text-decoration-underline" href="">Orci non here</a>
                </li>

                <li>
                    Quis dictum cursus faucibus mattis dignissim. Pellent
                    que <b>purus in sed</b> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                </li>
            </ul>
            <div className="gap_64"></div>
            <div className="doodle_img max-auto">
                <Image  data-aos="wake-up" data-aos-duration="1200" className="img-fluid" src='/images/banner/Doodle.png' alt="" height={570} width={501}/>
                <p className="text-black  text-center mt-3">this is an image with a caption example</p>
            </div>
          </div>  
        </div>
        <div className="col-12 col-md-6">
          <div className="chart">
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at <b>bibendum euismod </b> tellus duis curs
                    us dignissim odio. Sit vulputate et integer in.</li>

                    <li>
                        Lorem ipsum dolor sit amet, <b>consectetur adipiscing </b> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <b>Amet</b> interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget. 
                        Viverra at porttitor accumsan. <a className="text-black text-decoration-underline" href="">Orci non here</a>
                    </li>

                    <li>
                        Quis dictum cursus faucibus mattis dignissim. Pellent
                        <b>que purus in</b> sed sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                    </li>
            </ul>
            <div className="gap_64"></div>
            <div className="doodle_img mx-auto">
                <Image  data-aos="wake-up" data-aos-duration="1200" className="img-fluid" src='/images/banner/Doodle 2.png' alt="" width={570} height={401}/>
                <p className="text-black  text-center mt-3  text-decoration-underline"><a className="text_first_color" href="">download here</a></p>
            </div>
          </div>
        </div>
    </div>
</div>
<div className="gap_64"></div>
</section>
        </>
     );
}

export default DoodleSection;