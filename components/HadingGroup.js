function HeadingGroup({heading, subheading}) {
    return ( 
        <>
            <div className="heading_group text-center">
                <h2 className="heading_2">{heading}</h2>
                <h6 className="sub_heading">{subheading}</h6>
            </div>
        </>
     );
}

export default HeadingGroup;