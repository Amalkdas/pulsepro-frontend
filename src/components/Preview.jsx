import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Box, Card, CardContent, TextField } from '@mui/material';
import Edit from './Edit';
import { getfromworkoutapi } from '../services/allAPIs';
import Delete from './Delete';
import { Link } from 'react-router-dom';
import Workoutchart from './Workoutchart';










function Preview({workout,setworkout,addedworkout,getid}) {

 
  

  // filterinte state
  const [filterstatus,setfilterstatus] = useState('')

  const filterr=(e)=>{

    console.log(e.target.value);
    setfilterstatus(e.target.value)
    
  }

 


  



//all data stored from getting fom server
const [fromworkk,setfromworkk] = useState({})

 
    
 
  



    useEffect(() => {
  const controller = new AbortController();
  const load = async () => {
    const res = await getfromworkoutapi(getid, {
      signal: controller.signal
    });
    console.log(res);
    
    setfromworkk(res.data);
    console.log("fromworkk.Details state:", fromworkk.Details);
    
    
  };
  load();
  return () => controller.abort();
}, [getid]);



  const download= async()=>{

    const input =document.getElementById("downloadtable") // for the download 
     const canvas = await html2canvas(input,{scale:1}) // html to canvas
     const imgdata = canvas.toDataURL('image/png') // screenshot to image

    //  pdf steps

    const pdf= new jsPDF('p','mm','a5')
    const pdfwidth=pdf.internal.pageSize.getWidth()
    const pdfheight = (canvas.height*pdfwidth)/canvas.width

     const customPdfWidth = 297;  // Sticking to A4 Landscape width
        const customPdfHeight = 300;

     pdf.addImage(imgdata,'PNG',0,0,pdfwidth,pdfheight)
    pdf.save('Workout.pdf')



     try{
      const res=await addworkouthistoryapi(fromworkk);
      console.log(res);
      
      
      
      
    }
    catch(err)
    {
      console.log(err);
      
    }
   

  }

 
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} >
      <Stack direction={'row'} gap={3}><TextField label='Filter by Activity' onChange={e=>filterr(e)}></TextField>
    
      
      </Stack>
      

      <Stack justifyContent={'flex-end'} gap={3} direction={'row'}>
         <Button sx={{backgroundColor:'black',color:'white',fontSize:'0.7em'}} variant='contained' size='large' onClick={download}>Download</Button>
    
    <Edit workout={workout} setworkout={setworkout} getid={getid} fromworkk={fromworkk} setfromworkk={setfromworkk}></Edit>
    <Delete fromworkk={fromworkk} setfromworkk={setfromworkk} getid={getid}></Delete>
     
   
      </Stack>
     
    </Stack>
<div className="row mt-5 p-3 d-flex flex-column justify-content-center" style={{}}  id='downloadtable'>

  <Stack direction={'row'} gap={4} flexGrow={1}>
    <div className="col  p-4 rounded  disp"><Typography variant='h6' fontWeight={'bold'}>Userkey :</Typography>
    <Typography className='mt-2'>{fromworkk.Userkey}</Typography></div>
    <div className="col  p-4 rounded disp"><Typography variant='h6' fontWeight={'bold'}>Gender :</Typography>
    <Typography className='mt-2'>{fromworkk.Gender}</Typography></div>
    <div className="col  p-4 rounded  disp "><Typography variant='h6' fontWeight={'bold'}>Age :</Typography>
    <Typography className='mt-2'>{fromworkk.Age}</Typography></div>
    <div className="col  p-4 rounded  disp" ><Typography variant='h6' fontWeight={'bold'}>Height :</Typography>
    <Typography className='mt-2'>{fromworkk.Height} m</Typography></div>

     <div className="col  p-4 rounded  disp " ><Typography variant='h6' fontWeight={'bold'}>Weight :</Typography>
    <Typography className='mt-2'>{fromworkk.Weight} KG</Typography></div>
  </Stack>





  <table className='table table-bordered border-light table-dark table-hover mt-4 mb-5' >
    <thead >
      <tr>

        <th className='text-center p-3'><Typography sx={{color:'white'}}>Workout</Typography></th>
        <th  className='text-center p-3'><Typography sx={{color:'white'}}  >Calories Burned</Typography></th>
        <th  className='text-center p-3'> <Typography sx={{color:'white'}} >Duration</Typography></th>
        <th  className='text-center p-3'>
    <Typography  sx={{color:'white'}}>Intensity</Typography></th>
        <th  className='text-center p-3'>
    <Typography sx={{color:'white'}} >Notes</Typography></th>
     <th  className='text-center p-3'>
    <Typography sx={{color:'white'}} >Date</Typography></th>
         
    
   
      </tr>
   
  
      
    </thead>

    <tbody>
      {fromworkk.Details?.filter((item)=>
      (

        !filterstatus || item.Activity==filterstatus
      ))
      .map((item,idx)=>(



    <tr key={idx}>
      <td className='text-center p-3 '> <Typography sx={{color:'white'}}>{item.Activity}</Typography></td>
   <td  className='text-center p-3'><Typography sx={{color:'white'}}>{item.Calories}</Typography></td>
   <td  className='text-center p-3'>  <Typography sx={{color:'white'}}>{item.Duration}</Typography></td>
   <td  className='text-center p-3'> <Typography sx={{color:'white'}}>{item.Intensity}</Typography></td>
   <td  className='text-center p-3'>
    <Typography sx={{color:'white'}}>{item.Notes}</Typography></td>
    
     <td  className='text-center p-3'>
    <Typography sx={{color:'white'}}>{item.Date}</Typography></td>
  
   
  </tr>
 
    
  
   
  



  ))}

    </tbody>
    </table>
    <Stack direction={'row'} marginBottom={'2em'} >
      <div className="col-8"><Workoutchart fromworkk={fromworkk}></Workoutchart></div>
      <div className="col-4"> <div className='d-flex text-center p-5 flex-column'><h3>Get to know your activities</h3>
      <p style={{fontSize:'0.6em',textAlign:'justify'}} className='mt-4'>"Gain insight into your fitness efforts with this interactive pie chart. It illustrates the percentage of total calories burned by each workout activity, clearly showing which exercises are your most significant calorie consumers and how different activities contribute to your overall energy output</p>
      <p  style={{fontSize:'0.6em',textAlign:'justify'}} className='mt-1'>Beyond just showing data, this chart is a powerful tool for optimizing your fitness journey. By quickly identifying which activities contribute most to your calorie expenditure, you can make informed decisions about your workout routine.</p></div></div>
     
    </Stack>
    
  
  
   </div>

   
    </>
  )
}

export default Preview
