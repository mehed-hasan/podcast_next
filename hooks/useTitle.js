import { useEffect } from "react";

function useTitle(title) {

       useEffect(()=>{

        document.title = `Podcast || ${title}`;
        window.scrollTo(0, 0)

    },[title]);
}

export default useTitle;