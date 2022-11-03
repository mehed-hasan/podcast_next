import Image from "next/image";

function Comment({data}) {

    return ( 

  
             <div className='d-flex flex-column gap-5'>
                    <h1 className="fw-bold">
                      {data.comment}
                    </h1>
  
                    <div className="commenter d-flex justify-content-center align-items-center gap-2">
                      <Image src={`/images/avatar/${data.avatar}`} alt={data.avatar} width={20} height={20} />
                      <h6 className="text-black">{data.user}</h6>
                      <Image src={`/images/icon/${data.userRank.companyLogo}`} alt="" width={20} height={20}/>
                      <h6 className="text-black fw-bold">{data.userRank.rankName}</h6>  
                    </div>
                  </div>
    
     );
}

export default Comment;