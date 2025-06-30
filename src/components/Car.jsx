import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import box from '../assets/box.jpg'
import man from '../assets/man.jpg'
import leg2 from '../assets/leg2.jpg'

function Car() {
  return (
     <Carousel>
      <Carousel.Item>
     <img src={box} className='object-fit-cover'height="370px" width="100%" alt="" />
        <Carousel.Caption>
          <h3>HIIT</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={man} className='object-fit-cover'height="370px" width="100%"  alt="" />
        <Carousel.Caption>
          <h3>Aerobic</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={leg2} style={{backgroundPosition:'center'}} className='object-fit-cover'height="370px" width="100%"  alt="" />
        <Carousel.Caption>
          <h3 style={{textShadow:'2px 2px 2px black'}}>Cardio</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Car
