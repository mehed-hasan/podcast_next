import Link from "next/link";

function BorderedBtn({btnText,link}) {
    return ( 
     
            <Link href={`/${link}`} className="bordered_btn">
                {btnText}
                </Link>
      
     );
}

export default BorderedBtn;