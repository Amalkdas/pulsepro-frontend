
import './App.css'
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import Car from './components/Car';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';







function App() {

  const date = new Date()
  console.log(date.toLocaleString());
  
  

  return (
    <>
    <header className='d-flex  gap-2 p-4 align-items-center gap-5  '>
    <h1 style={{fontSize:'2.8em'}}>Pulsepro <span style={{fontSize:'0.2em',color:'gray'}}>Keep moving</span></h1>
    <div className='d-flex gap-5 ms-5'>
      <a href="/track">Track my Fitness</a>
      <a href="/bmi">BMI</a>
    </div>
    <div className=' rounded p-1 d-flex justify-content-center'></div>
   </header>
  <div className="row  gap-4  gx-0 mx-3">
    <div className="col" id='c'><img src="https://cdn.pixabay.com/photo/2017/07/31/22/27/black-2561620_1280.jpg" className='img-fluid' width="100%" height="100%" alt="" />
    <div id='o' className=''><h1>Diverse Workouts</h1></div></div>
    <div className="col bg-danger" id='c'><img src="https://cdn.pixabay.com/photo/2020/03/22/14/44/sport-4957441_1280.jpg" className='img-fluid' alt="" />
    <div id='o'><h1>Push Your <br /> Limits</h1></div></div>
    <div className="col bg-secondary" id='c'><img src="https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_1280.jpg" className='img-fluid' alt="" />
    <div id='o'><h1>Boost Your Energy</h1></div></div>
  </div>
  <div className="row  mt-4 mx-2">
   
  
     <div className="col-4  d-flex gap-4 flex-column">
      <div className=' p-4 rounded d-flex align-items-center gap-4' style={{border:'2px solid black'}}><FaFire className='fs-1' /><h5>Focus on Energy & Fuel
        <br /><span style={{fontSize:'0.5em',color:'gray'}}>Optimize your daily fuel for peak performance.</span></h5></div>
     
      <div className=' p-4 rounded d-flex align-items-center gap-4' style={{border:'2px solid black'}}><FaStopwatch className='fs-1' /><h5>Workout Duration <br /><span style={{fontSize:'0.5em',color:'gray'}}>Track active minutes to build lasting habits</span></h5></div>
      <div className=' p-4 rounded d-flex align-items-center gap-4' style={{border:'2px solid black'}}>
        <CgGym className='fs-1' />
        <h5>Workout Types <br /><span  style={{fontSize:'0.5em',color:'gray'}}>Organize and track your diverse activities.</span></h5>
      </div>
    </div>
    <div className="col-8 px-2">
      
       <Car></Car>
      
    </div>
  </div>
   <div className="row p-4">
        <div className="col"><img src="https://static.nike.com/a/images/f_auto/dpr_1.4,cs_srgb/h_448,c_limit/09acbcdc-5128-41c1-8e6a-6befd8abe779/nike-training-club-app-home-workouts-more.jpg" className='img-fluid' alt="" /></div>
        <div className="col p-4"><h4 style={{fontSize:'2em'}}>Fitness for Everyone</h4>
        <p style={{textAlign:'justify',fontSize:'0.6em'}} className='mt-4'>PlusPro fitness tracker is designed to be your intuitive partner on the journey to a healthier, more active life. Forget the notion that fitness is exclusive or complicated; with your PlusPro, it truly is Fitness for Everyone. This powerful yet easy-to-use device puts the tools for well-being directly on your wrist, empowering you to understand, track, and improve your health, no matter where you're starting from or what your goals are.</p>
        <p style={{textAlign:'justify',fontSize:'0.6em'}} className='mt-4'>Beyond just tracking, PlusPro is about fostering sustainable habits. It acts as a gentle, intelligent companion, offering timely reminders to move, encouraging you to hit your daily targets, and providing clear insights into your progress. This seamless integration of wellness into your daily routine transforms aspirational goals into achievable realities, making consistent activity a natural and rewarding part of your life.</p>

        <p style={{textAlign:'justify',fontSize:'0.6em'}} className='mt-4'>Ultimately, PlusPro empowers you to confidently take charge of your well-being. It simplifies complex data into understandable metrics, allowing you to focus less on the 'how' and more on the 'doing,' ensuring your path to a healthier, happier you is both clear and continuously motivating.</p>
        <div className='text-center mt-4' color="secondary"><Link to='/page2'><Button variant="contained" sx={{backgroundColor:'black'}}>Check it out</Button></Link></div></div>
        
        <div className="col"><img src="https://static.nike.com/a/images/f_auto/dpr_1.4,cs_srgb/h_448,c_limit/28aca81b-2c57-4a08-ab33-59a755fe348f/nike-training-club-app-home-workouts-more.jpg" alt="" className='img-fluid' /></div>
       </div>
       <div className="row mx-3 rounded p-5 text-light d-flex flex-column align-items-center justify-content-center text-center" style={{backgroundColor:'black'}}>
        <h2>YOUR HEALTH IS AN INVESTMENT, NOT AN EXPENSE.</h2>
        <p className='text-secondary mt-2' style={{fontSize:'0.6em'}}>- Unknown</p>
       </div>
       <div className="row mt-4"></div>
       <Footer></Footer>
       


    
    
    </>
  )
}

export default App
