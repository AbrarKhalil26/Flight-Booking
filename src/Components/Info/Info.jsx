import React, {useEffect} from "react";

// Imported icons ==========================>
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from 'react-icons/bs';
import { BsBookmarkCheck } from "react-icons/bs";

// imported AOS (Animations) =================>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Info = () => {

  // UseEffect to set animation duration ==>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return(
    <div className="info section">
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2 data-aos="fade-right" data-aos-duration="2500">
            Travel to make memories all around the world
          </h2>
          <button data-aos="fade-left" data-aos-duration="2500" className="btn">
            view All
          </button>
        </div>

        <div className="cardsDiv grid">

          <div data-aos="fade-up" data-aos-duration="2500" className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon"/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>
              you can also call airlines from your phone and book a flight ticket!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3500" className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon"/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>
              you can also call airlines from your phone and book a flight ticket!
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="4500" className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon"/>
            </div>
            <span className="cardTitle">Save more</span>
            <p>
              you can also call airlines from your phone and book a flight ticket!
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Info;