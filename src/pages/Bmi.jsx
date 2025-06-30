import React, { useEffect } from 'react'
import { Button, TextField } from '@mui/material';
import {useState } from 'react'
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
Footer





function Bmi() {

  const [Height,setHeight] = useState('')
  const [Weight,setWeight] = useState('')

  const [resetbmi,setresetbmi] = useState(false)

 


  const [final,setfinal] = useState('')

  


  const getweight=(e)=>{

     const w=parseFloat(e.target.value)
     setWeight(w)

    
    
    }
    console.log(Weight);
    

    const getheight=(e)=>{

      const h=parseFloat(e.target.value)
      setHeight(h)
  
      
      
    }
    console.log(Height);

    const reset=()=>{

      setresetbmi(false)
      setfinal('')
      setHeight('')
      setWeight('')
     


    }
    


    const checkbmi=()=>{

     

    
      
      

if(Weight && Height){

    let bmi = Math.round(Weight/(Height*Height))
      console.log(bmi);
       setresetbmi(true)
      
      

      let msg;

switch(true){

  case(bmi<18.5):
  msg=` Your BMI Value is ${bmi} `
  setfinal(msg)
  break;

  case(bmi>=18.5 && bmi<=24.9):
  msg=` Your BMI Value is ${bmi} ` 
  setfinal(msg)
  break;

  case(bmi>=25 && bmi<=29.9):
  msg=` Your BMI Value is ${bmi}


  `
  setfinal(msg)
  break;

  case(bmi>=30):
  msg=` Your BMI Value is ${bmi} `
  setfinal(msg)
  break;





}
setHeight('')
setWeight('')





}

      else if(!Weight || !Height){


        alert("Please Fill Both fields")
      }

      else if (!Weight && !Height){

        alert("Please Fill All Fields")
      }




    }


   
  return (
    <>

    <header className='d-flex  gap-2 p-4 align-items-center gap-5  '>
    <h1 style={{fontSize:'2.8em'}}>Pulsepro <span style={{fontSize:'0.2em',color:'gray'}}>Keep moving</span></h1>

    <a href="/" className='mt-2'>Home</a>
    <a href="/page2" className='mt-2'>Menu</a>
   
    
   
   </header>



   {resetbmi? 
   
   <div className="row  ">
    <div className="col  p-5">

<div className=' rounded gap-4 d-flex flex-column shadow' type='number' style={{height:'22em',justifyContent:'center'}}>


  <div className='text-center '><TextField id="outlined-basic" label="Enter Weight ( kg )" value={Weight} variant="outlined" onChange={e=>getweight(e)} sx={{width:'80%'}} /></div>

  
  <div className='text-center'><TextField id="outlined-basic" label="Enter Height ( m )" value={Height} variant="outlined" onChange={e=>getheight(e)} sx={{width:'80%'}} /></div>


 <div className='text-center mt-2'><Button variant='text text-white bg-black w-50 p-2' onClick={checkbmi}>Check</Button></div> 

  

  



</div>

    </div>
    <div className="col-6 d-flex flex-column  p-4" style={{ alignItems:'center'}}>

      <h1>BMI Calculator</h1>
      <p style={{fontSize:'0.8em'}} className='mt-4'>Body Mass Index (BMI) is a quick, low-cost screening tool that estimates body fat by dividing weight (kg) by height squared (m²), helping identify underweight, overweight, or obesity.
      </p>

     

        <div className='d-flex   gap-2 align-items-center mt-3' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'red'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> Less than 18.5 ( underweight )</p></div>
          

        </div>

        <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'green'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> 18.5 - 24.9 ( Normalweight )</p></div>
          

        </div>

         <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'red'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> 25 - 29.9 ( Overweight )</p></div>
          

        </div>

        <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'yellow'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> Greater than 30 ( Obese )</p></div>
          

        </div>

        <h1 className='mt-5' style={{fontSize:'2em'}}>

          {
            final
          }
         

          

         



        </h1>
      
        
        
    </div>
    <div className='text-center text-white'><Button  variant='standard'  sx={{backgroundColor:'red'}} className='shadow' onClick={reset}>reset</Button></div>
    
   </div> 
   
   
  
   
   :
   
   
   <div className="row ">
    <div className="col  p-5">

<div className=' rounded gap-4 d-flex flex-column shadow' type='number' style={{height:'22em',justifyContent:'center'}}>


  <div className='text-center '><TextField id="outlined-basic" label="Enter Weight ( kg )" variant="outlined" onChange={e=>getweight(e)} sx={{width:'80%'}} /></div>

  
  <div className='text-center'><TextField id="outlined-basic" label="Enter Height ( m )" variant="outlined" onChange={e=>getheight(e)} sx={{width:'80%'}} /></div>


 <div className='text-center mt-2'><Button variant='text text-white bg-black w-50 p-2' onClick={checkbmi}>Check</Button></div> 

  

  



</div>

    </div>
    <div className="col-6 d-flex flex-column  p-4" style={{ alignItems:'center'}}>

      <h1>BMI Calculator</h1>
      <p style={{fontSize:'0.8em'}} className='mt-4'>Body Mass Index (BMI) is a quick, low-cost screening tool that estimates body fat by dividing weight (kg) by height squared (m²), helping identify underweight, overweight, or obesity.
      </p>

     

        <div className='d-flex   gap-2 align-items-center mt-3' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'red'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> Less than 18.5 ( underweight )</p></div>
          

        </div>

        <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'green'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> 18.5 - 24.9 ( Normalweight )</p></div>
          

        </div>

         <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'red'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> 25 - 29.9 ( Overweight )</p></div>
          

        </div>

        <div className='d-flex   gap-2 align-items-center mt-2' style={{justifyContent:'flex-start',width:'100%'}}>
          <div className='box border' style={{height:'1em',width:'1em',backgroundColor:'yellow'}}></div>
          <div><p style={{fontSize:'0.8em'}} className='mb-0'> Greater than 30 ( Obese )</p></div>
          

        </div>

        <h1 className='mt-5' style={{fontSize:'2em'}}>

          {
            final
          }
         

          

         



        </h1>
      
        
        
    </div>
   </div>
   
   
   }
   <div className='mt-5'></div>
   <Footer></Footer>

   

    
    
    
    </>
  )
}

export default Bmi
