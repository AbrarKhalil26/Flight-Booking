import React, {useEffect} from "react";

// imported Assests =============>
import video from '../../assets/colombia_-_24746 (720p).mp4'
import aeroplane from '../../assets/airplane1.png'

// imported AOS (Animations) =================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    // UseEffect to set animation duration ==>
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])



    return(
        <div className="home flex container">
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration="2500">
                    Create Ever-lasting Memories with us
                </h1>
            </div>

            <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} className="video" autoPlay muted loop></video>
                </div>
                
                <img src={aeroplane} className="plane" />
            </div>
        </div>
    )
}

export default Home;