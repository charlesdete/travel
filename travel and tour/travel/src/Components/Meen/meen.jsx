import React, {useEffect} from 'react'
import './meen.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import img from '../../Assets/Captures/wave.jpg'
import img2 from '../../Assets/Captures/lion.jpg'
import img3 from '../../Assets/Captures/elephant.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [

  {
    id:1,
    imgSrc:img,
    destTitle: 'Bora Bora',
    location: 'New zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Orange',
    location: 'Nairobi ',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Drums',
    location: 'Kigali',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  },

  // {
  //   id:4,
  //   imgSrc:img4,
  //   destTitle: 'Hills',
  //   location: 'New York',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$600',
  //   description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  // },

  // {
  //   id:5,
  //   imgSrc:img5,
  //   destTitle: 'Twende',
  //   location: 'Kampala',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$400',
  //   description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  // },

  // {
  //   id:6,
  //   imgSrc:img6,
  //   destTitle: 'Choma',
  //   location: 'Mombasa',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$200',
  //   description: 'The epitome of happiness, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventurous activities.'
  // },
]



const Main = () => {
//add a scroll animation
useEffect(()=>{
  Aos.init({duration:2000})
}, [])

  return (
    <section className='main container section'>

     <div className='secTitle'>
      <h3 data-aos="fade-right" className='title'>
        Most visited destinations
      </h3>
     </div>

     <div className='setContent grid'>
      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div key={id} data-aos="fade-up" className='singleDestination'>
                <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                </div>

                   <div className='cardInfo'>
                      <h4 className='destTitle'>{destTitle}</h4>
                      <span className='continent flex'>
                        <HiOutlineLocationMarker  className='icon'/>
                        <span className='name'>{location}</span>
                      </span>

                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                       </div>

                       <div className='price'>
                        <h5>{fees}</h5>
                       </div>
                    </div>
        
                    <div  className='desc'>
                      <p>{description}</p>
                      </div>

                    <button className='btn flex'>DETAILS
                      <HiOutlineClipboardCheck className='icon'/>
                      </button>  
                  </div>  
              </div>
            )
        })
      }
     </div>

    </section>
  )

}

export default Main