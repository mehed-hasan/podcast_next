function Preloader() {
    return ( 
    <>
        <section id="preloader">
        <div className="loading">
            <span style={{width:'80px'}}><img className="img-fluid w-100" src="assets/images/loader/loader_icon.svg" alt=""/></span>
            <span  style={{color:'#FF6c6c', fontWeight:'bold'}}>P</span>
            <span style={{color:'#FF6c6c', fontWeight:'bold'}}>O</span>
            <span style={{color:'#FF6c6c', fontWeight:'bold'}}>D</span>
            <span style={{color:'#FF6c6c', fontWeight:'bold'}}>C</span>
            <span style={{color:'#5F5FFF'}}>A</span>
            <span style={{color:'#5F5FFF'}}>S</span>
            <span style={{color:'#5F5FFF'}}>T</span>
        </div>
        </section>
    </>
     );
}

export default Preloader;