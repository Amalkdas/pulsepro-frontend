
import React, { use, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FiPlusCircle } from "react-icons/fi";
import { addworkoutapi } from '../services/allAPIs';
import {  CircularProgress } from '@mui/material';
import Swal from 'sweetalert2'



function Inputs({workout,setworkout,onhandleworkout,setdoneadding,eachworkoutdetails,seteachworkoutdetails,getid,setgetid}) {

  console.log(eachworkoutdetails);


   //this is for the add alert to add wrokout if the initial details not filled

  const [ifinitialdetails,setifinitialdetails] = useState(false)

  // for disabling the initial inputs

  const [fordisabling,setfordisabling] = useState(false)

  //this for the h,w,g details

  const height = workout.Height
  const weight =workout.Weight
  const gender = workout.Gender
  const ukey = workout.Userkey
  const age = workout.Age
  


  const inputdisable=()=>{

    if (!height || !weight || !gender || !ukey || !age){

      alert("Please Fill all the Initial fields")
    }
    else{


       setfordisabling(true)

       alert("Initial Details Gathered")
       setifinitialdetails(true)
    }

   
  }

 
 
  
  

  

  






  
  





 
console.log(workout);



 

  const addworkouttoarray=async()=>{


   

   

    
    try{


      
  //tehse all are used to check if the inputs are empty or not
  const activity = eachworkoutdetails.Activity.length>0
  const calories = eachworkoutdetails.Calories
  const intensity = eachworkoutdetails.Intensity
  const duration = eachworkoutdetails.Duration
  const notes = eachworkoutdetails.Notes


  if( !activity || !calories || !intensity || !duration  || !ifinitialdetails || !Date){


    alert("Please Fill all the fields")
    return;
  }

  else{

  }


      const copyofeachworkoutdetails ={

        "Activity": eachworkoutdetails.Activity,
        "Duration": parseInt(eachworkoutdetails.Duration),
        "Intensity": parseInt(eachworkoutdetails.Intensity),
        "Date": eachworkoutdetails.Date,
        "Calories" : eachworkoutdetails.Calories,
        "Notes":eachworkoutdetails.Notes
      }

      const updatedworkout = {

        "Userkey": workout.Userkey,
        "Height":workout.Height,
        "Weight":workout.Weight,
        "Gender":workout.Gender,
        "Age":workout.Age,
        "Details":[...workout.Details,copyofeachworkoutdetails]


      }

      setworkout(updatedworkout)

      alert("Workout added")
     
        
          

        seteachworkoutdetails({

           "Activity":'',
  "Duration":'',
  "Calories":'',
  "Intensity":'',  
  "Date":'',
  "Notes":''
        }) 

   
        
       

       
         
         
         

         

      
     

    }
    catch(err){
      console.log(err);
      
    }
   
    
  }

  const doneaddingandtoserver=async()=>{

    if(confirm("Are you done Adding ?")){

      setdoneadding(true)

      try{

        const result = await addworkoutapi(workout)
        console.log(result);
        console.log(result.data.id);
        setgetid(result.data.id)
        console.log(getid);

        if(result.status==200){
              await Swal.fire({
  title: "Success!",
  text: "All workouts recorded Successfully",
  icon: "success"
});

        setdoneadding(true)

        }

    
        
        

        



      }
      catch(err){
        console.log(err);
        
      }

      
    }



  }
  
  return (
    
   
    <> 
  
    
    <div className="row mt-3  "><div className="col-3">   <TextField id="i" label="Userkey"  onChange={e=>setworkout({...workout,Userkey:e.target.value})} InputLabelProps={{ shrink: true }}  variant="outlined" fullWidth value={workout.Userkey} disabled={fordisabling} /></div>
    
    <div className="col">   <TextField id="i" label="Height ( In meters )" type='number' variant="outlined"   onChange={e=>setworkout({...workout,Height:e.target.value})}  InputLabelProps={{ shrink: true }} disabled={fordisabling}  value={workout.Height} fullWidth  /></div>

    <div className="col">   <TextField id="i" label="Weight ( kg )" type='number' onChange= {e=>setworkout({...workout,Weight:e.target.value})} value={workout.Weight} InputLabelProps={{ shrink: true }}  disabled={fordisabling}  variant="outlined" fullWidth  /></div>

    <div className="col">  
      
      
      
      <TextField id="i" label="Gender" 

 onChange={e=>setworkout({...workout,Gender:e.target.value})}
    
      variant="outlined" disabled={fordisabling} InputLabelProps={{ shrink: true }} value={workout.Gender} fullWidth  /></div>

        <div className="col">  
      
      
      
      <TextField id="i" label="Age"   type='number'

 onChange={e=>setworkout({...workout,Age:e.target.value})}
    
      variant="outlined" disabled={fordisabling} InputLabelProps={{ shrink: true }} value={workout.Age} fullWidth  /></div>

     


        <div className="col d-flex  "> <Button onClick={inputdisable} size='large' variant='contained' disabled={ifinitialdetails}>Add</Button> </div>
   
      </div>


<div className="row mx-auto  bg-black p-5 rounded d-flex ">
  <p className='fst-italic text-light text-center' style={{fontSize:'0.7em'}}>"It's not what we do once in a while that shapes our lives. It's what we do consistently."</p>
</div>
      
  
    




      <div className="row gap-2 mt-3">

        <div className="col in  rounded "> <TextField    onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Date:e.target.value})}  type='date' variant="outlined" fullWidth value={eachworkoutdetails.Date}  />

  
        </div>
        <div className="col in rounded "><TextField  onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Activity:e.target.value})} label="Activity" variant="outlined" fullWidth value={eachworkoutdetails.Activity}  /></div>

<div className="col in  rounded"><TextField id="i" label=" Duration ( mins )" type='number'onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Duration:e.target.value})} value={eachworkoutdetails.Duration} variant="outlined" fullWidth  /></div>
      
      </div>

      <div className="row gap-2">
        


        <div className="col in  rounded"><TextField id="i" label="Calories Burned ( Kcal )" type='number' onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Calories:e.target.value})} value={eachworkoutdetails.Calories}  variant="outlined" fullWidth  /></div>

         <div className="col in  rounded"><TextField id="i" label="Intensity Level ( 1 - 10 )" type='number' onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Intensity:e.target.value})} value={eachworkoutdetails.Intensity}  variant="outlined" fullWidth  /></div>

          <div className="col in  rounded"><TextField id="i" label=" Notes"  onChange={e=>seteachworkoutdetails({...eachworkoutdetails,Notes:e.target.value})} value={eachworkoutdetails.Notes}  variant="outlined" fullWidth  /></div>



      </div>



      <div className='text-center mt-1 d-flex gap-3 justify-content-center'><Button sx={{backgroundColor:'black',color:'white'}}  size='large'  className='p-3' onClick={addworkouttoarray}  variant='contained'
       >
       
 <span className='ms-1 text-light' style={{fontSize:'0.6em'}}  >Add Workout</span> 
        
        
       </Button><Button size='large' variant='contained'    className='bg-primary text-light' style={{fontSize:'0.7em'}} onClick={doneaddingandtoserver}>Done</Button></div>

      
      
    </>
  )
}

export default Inputs
