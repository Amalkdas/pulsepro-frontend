import React, { useState } from 'react'

import Inputs from './Inputs.jsx'
import Preview from './Preview.jsx'




function Container() {


  const [getid,setgetid]= useState('')

  const [addedworkout,setaddedworkout] = useState([])

  

  const [doneadding,setdoneadding] = useState(false)

    


//this is the main state for the userkey  and details array
   const [workout,setworkout] = useState(
    { 
"Userkey":'',
"Height":'',
"Weight":'',
"Gender":'',
"Age":'',
"Details": []
})

//for the each workout session
const [eachworkoutdetails,seteachworkoutdetails] = useState({

  "Activity":'',
  "Duration":'',
  "Calories":'',
  "Intensity":'',  // even if the value is a number , i gave string ,bcoz by defualt o will be there
  "Date":'',
  "Notes":''


})

   
  return (
  <>
   <header className='d-flex  gap-2 p-4 align-items-center gap-5  '>
    <h1 style={{fontSize:'2.8em'}}>Pulsepro <span style={{fontSize:'0.2em',color:'gray'}}>Keep moving</span></h1>

    <a href="/" className='mt-2'>Home</a>
    <a href="/page2" className='mt-2'>Menu</a>
    </header>

    {

      doneadding ?  

<div className="row d-flex mx-4 gap-4"><div className="col"><Preview workout={workout} setworkout={setworkout} addedworkout={addedworkout} getid={getid} ></Preview></div></div> :

      <div className="row d-flex mx-4 gap-4"><Inputs workout={workout} setworkout={setworkout}  setdoneadding={setdoneadding}   eachworkoutdetails={eachworkoutdetails} seteachworkoutdetails={seteachworkoutdetails} getid={getid} setgetid={setgetid}></Inputs></div>


      
      
      }


{ 
    } 
    
  </>
  )
}

export default Container
