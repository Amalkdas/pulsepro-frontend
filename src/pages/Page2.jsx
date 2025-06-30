import React from 'react'
import Footer from '../components/Footer'

 
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
 

function Page2() {
  return (
    <>
    <header className='d-flex  gap-2 p-4 align-items-center gap-5  '>
    <h1 style={{fontSize:'2.8em'}}>Pulsepro <span style={{fontSize:'0.2em',color:'gray'}}>Keep moving</span></h1>

    <a href="/" className='mt-2'>Home</a>
    
   
   </header>
   <div className="row mt-5  mb-5 mx-5 gap-5">
      


      <div className="col gap-4 flex-column d-flex align-items-center justify-content-center rounded p-5" style={{border:'3px solid black',backgroundColor:'black'}}>
      <i class="fa-solid fa-fire-flame-curved fs-1 text-light"></i>
      <h5 className='text-light'>Track Your Fitness</h5>
      <p style={{textAlign:'justify',color:'gray',fontSize:'0.7em'}}>Effortlessly monitor your workouts, steps, and progress daily, transforming every activity into valuable insights that fuel your journey toward a healthier, stronger you.</p>
       <Link to='/add'><Button variant='outlined' sx={{color
        :'white'
      }}>Let's get started</Button></Link>

      </div>
      <div className="col gap-4 d-flex flex-column align-items-center justify-content-center rounded p-5" style={{border:'3px solid black',backgroundColor:'black'}}><i class="fa-solid fa-square-poll-vertical text-light fs-1"></i>
      <h5 className='text-light'>Calculate your BMI <span style={{fontSize:'0.3em',color:'gray'}}> ( Body Mass Index )</span></h5>
      <p style={{textAlign:'justify',color:'gray',fontSize:'0.7em'}}>BMI is a simple measure using your weight and height to indicate if your body fat is in a healthy range or not</p>
      
      <Link to='/Bmi'><Button variant='outlined' sx={{color:'white'}} >Check</Button></Link></div>


     
    </div>
   <Footer></Footer></>
  )
}

export default Page2
