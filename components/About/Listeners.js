import Image from 'next/image';
import HeadingGroup from '../HadingGroup';


function Listeners() {
    return ( 

        <>
        <section id="listener_say">

            <HeadingGroup heading='What our listeners say' subheading='Their experience throughout every platform'/>

              <div className="gap_64"></div>
              <div className="img_wrapper text-center">
                <Image className="img-fluid" src='/images/banner/speakers.png' alt="" width={1296} height={640} />
              </div>
          </section>

          <div className="gap_64"></div>
        </>
     );
}

export default Listeners;