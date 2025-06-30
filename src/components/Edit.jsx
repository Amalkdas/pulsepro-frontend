import React, { useEffect, useState } from 'react'

import Modal from '@mui/material/Modal';
import { Box, Button, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getfromworkoutapi, updateapi } from '../services/allAPIs';
import Swal from 'sweetalert2'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  
 
  boxShadow: 24,
  
  p: 4,
  overflowY:'auto',
  maxHeight:'80vh',
 

};



function Edit({workout,setworkout,getid,fromworkk,setfromworkk}) {
  // console.log(getid);

 

  const update=async()=>{

    try{

       const updated = await updateapi(getid,fromworkk)
       console.log(updated);
       if(updated.status==200){
        Swal.fire({
         title: "Success!",
         text: " Updated Successfully",
         icon: "success"
       });
       handleClose()

       }
       
       
    }
    catch(err){
      console.log(err);
      
    }


   


  }

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Button variant='contained' onClick={handleOpen}>Edit</Button>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        scroll="body"
      >
        <Box sx={style}>
          <Stack><h4>User Details</h4></Stack>
          <Stack direction={'row'} gap={2} marginTop={4}>
            <TextField InputLabelProps={{ shrink: true }} value={fromworkk.Userkey}  label='Userkey'  onChange={e=>setfromworkk({...fromworkk,Userkey:e.target.value})}></TextField>
          <TextField InputLabelProps={{ shrink: true }} value={fromworkk.Gender}  label='Gender'onChange={e=>setfromworkk({...fromworkk,Gender:e.target.value})} ></TextField>
          <TextField InputLabelProps={{ shrink: true }} value={fromworkk.Age}  label='Age' 
 onChange={e=>fromworkk({...setfromworkk,Age:e.target.value})}></TextField>
          <TextField InputLabelProps={{ shrink: true }} value={fromworkk.Height}  label='Height' onChange={e=>setfromworkk({...fromworkk,Height:e.target.value})} ></TextField>
          <TextField InputLabelProps={{ shrink: true }} value={fromworkk.Weight}  label='Weight' onChange= {e=>setfromworkk({...fromworkk,Weight:e.target.value})}></TextField></Stack>
          <hr />
          <Stack><h5>Workout Sesssions</h5></Stack>
          {
            fromworkk.Details?.map((item,idx)=>(

                <Stack direction={'row'} gap={2} marginTop={3} key={idx}>

                    <TextField value={item.Activity} onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Activity: e.target.value, 
    };

     setfromworkk({
        ...fromworkk, 
        Details: updatedDetails, 
    });
                    }} ></TextField>
                    <TextField value={item.Duration} label='Duration' InputLabelProps={{ shrink: true }} 
                    
                    onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Duration: e.target.value, 
    };

     setfromworkk({
        ...fromworkk,
        Details: updatedDetails, 
    });
                    }} ></TextField>
                    <TextField value={item.Calories} label='Calories' InputLabelProps={{ shrink: true }} 
                    
                    onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Calories: e.target.value, 
    };

     setfromworkk({
        ...fromworkk, 
        Details: updatedDetails, 
    });
                    }} ></TextField>
                    <TextField value={item.Intensity} label='Intensity' InputLabelProps={{ shrink: true }}  onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Intensity: e.target.value, 
    };

     setfromworkk({
        ...fromworkk,
        Details: updatedDetails, 
    });
                    }} ></TextField>


                     <TextField  value={item.Notes} label='Notes' InputLabelProps={{ shrink: true }}
                    
                    onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Notes: e.target.value, 
    };

     setfromworkk({
        ...fromworkk, 
        Details: updatedDetails, 
    });
                    }} ></TextField>
                    <TextField  value={item.Date} label='Date' InputLabelProps={{ shrink: true }}
                    
                    onChange={e=>{  const updatedDetails = [...fromworkk.Details]; 
                       updatedDetails[idx] = {
        ...updatedDetails[idx], 
        Date: e.target.value, 
    };

     setfromworkk({
        ...fromworkk, 
        Details: updatedDetails, 
    });
                    }} ></TextField>

                </Stack>
            ))


          }
          
          <Stack direction={'row'} marginTop={4} justifyContent={'center'} gap={2}>
             <Button variant='contained' onClick={update}>Save changes</Button>
             
          </Stack>
        </Box>
      </Modal>
    
    
    </>
  )
}

export default Edit
