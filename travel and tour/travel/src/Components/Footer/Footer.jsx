import React, {useEffect} from 'react'
import './Footer.css';
import video2 from '../../Assets/Captures/seas.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi";
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
//add a scroll animation
useEffect(()=>{
  Aos.init({duration:2000})
}, [])

  return (
  
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

        <div className='setContent container'>
          <div className='contactDiv flex'>
            <div data-aos="fade-up" className='text'>
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className='inputDiv flex'>
              <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
              <button data-aos="fade-up" className='btn flex' type='submit'>
               SEND<FiSend className='icon' />
              </button>
            </div>
          </div>

          <div className='footerCard flex'>
              <div className='footerIntro flex'>
                <div className='logoDiv'>
                  <a href='' className='logo flex'>
                    <MdOutlineTravelExplore className="icon"/>Travel.
                  </a>
                </div>

                <div data-aos="fade-up" className='footerParagraph'>
                 lorem ipssums dolor sit amet consecteur adipiscing elit 
                </div>

                 <div data-aos="fade-up" className='footerSocials flex' >
                  <AiOutlineTwitter className='icon'/>
                  <AiFillYoutube className='icon'/>
                  <AiFillInstagram className='icon'/>
                 </div>
              </div>

              <div className='footerLinks grid'>
                <div data-aos="fade-up"
                data-aos-duration="3000"
                className='linkGroup'>
                  <span className='groupTitle'>
                    PARTNERS
                  </span>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Bookings
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Rentcars
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    HoterlWorld
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Tripago
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    TripAdvisor
                  </li>
                </div>

                <div data-aos="fade-up" 
                data-aos-duration="4000"
                className='linkGroup'>
                  <span className='groupTitle'>
                    OUR AGENCY
                  </span>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Services
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Agency
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Payment
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Tourism
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Insurance
                  </li>
                </div>

                <div data-aos="fade-up" 
                data-aos-duration="5000"
                className='linkGroup'>
                  <span className='groupTitle'>
                    LAST MINUTE
                  </span>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    London
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Nairobi
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    California
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                  Europe
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    Indonesia
                  </li>
                </div>
              </div>
              
              <div className='footerDiv flex'>
                <small>BEST TRAVEL WEBSITE THEME</small>
                <small>CopyRights Reserved - Charlie </small>
              </div>
          </div>
        </div>

    </section>
  )

}

export default Footer