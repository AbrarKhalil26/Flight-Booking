import React, {useEffect} from "react";

// Imported Destination Image ============>
import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'
import newyork from '../../assets/newyork.jpg'

// Imported Traveler Image ============>
import traveler1 from '../../assets/user2.jpg'
import traveler2 from '../../assets/user1.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'

// imported AOS (Animations) =================>
import Aos from 'aos'
import 'aos/dist/aos.css'


// use high order array method called Map to display all the data ====>
const travelers = [
  {
    id: 1, 
    distinationImage: newyork,
    travelerImage: traveler2,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },
  {
    id: 2, 
    distinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id: 3, 
    distinationImage: london,
    travelerImage: traveler3,
    travelerName: 'John Web',
    socialLink: '@johnWeb'
  },
  {
    id: 4, 
    distinationImage: dubai,
    travelerImage: traveler4,
    travelerName: 'Naresh Lamar',
    socialLink: '@nareshlamar'
  }
]




const Travelers = () => {
  
  // UseEffect to set animation duration ==>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-left" data-aos-duration="2500">
          Top travelers of this month!
        </h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({id, distinationImage, travelerImage, travelerName, socialLink})=>{
              return(
                  <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                    <img src={distinationImage} alt="" className="distinationImage"/>
                    <div className="travelerDetails">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p> 
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Travelers;
