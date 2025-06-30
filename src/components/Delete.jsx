import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
useEffect
import { removeapi } from '../services/allAPIs';
import Swal from 'sweetalert2'





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  
 
  boxShadow: 24,
  
  p: 4,
  overflowY:'auto',
  maxHeight:'80vh',
 

};


function Delete({fromworkk:forupdating,getid,setfromworkk}) {

   
    


    const [workoutobjects,setworkoutobjects] = useState(forupdating)

    useEffect(() => {
  setworkoutobjects(forupdating);
}, [forupdating]);
     

   

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const remove=async(indextodelete)=>{


        try{



           const updated = workoutobjects.Details.filter((_,i)=> i!==indextodelete)
            

           const fullUpdatedWorkoutObject  = {
            ...workoutobjects,Details:updated};
            

                

                
            
             const res = await removeapi(getid,fullUpdatedWorkoutObject)
        console.log(res);

       if (res.status === 200) {

        handleClose()


         Swal.fire({
                         title: "Success!",
                         text: "Workout cleared Successfully",
                         icon: "success"
                       }); 
                //modalnte display
                setworkoutobjects(fullUpdatedWorkoutObject);
                
                
//ivide table display and state
                if (setfromworkk) { 
                    setfromworkk(fullUpdatedWorkoutObject); 
                   
                }
            }

        }
        catch(err){
            console.log(err);
            
        }

       
        




      }


  return (
    <>

    <Button sx={{backgroundColor:'red',color:'white',padding:'0.8em'}} onClick={handleOpen} variant='contained' >Delete</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        scroll="body"
      ><Box sx={style}>
         <Stack><h4>Workout Sesssions</h4></Stack>
         {

            workoutobjects.Details?.map((item,index)=>(

               <Stack direction={'row'} gap={2} marginTop={5} key={index}>

                <TextField value={item.Activity}  label='Activity' InputLabelProps={{ shrink: true }}></TextField>
                <TextField value={item.Duration}  label='Duration' InputLabelProps={{ shrink: true }}></TextField>
                <TextField value={item.Calories}  label='Calories' InputLabelProps={{ shrink: true }}></TextField>
                <TextField value={item.Intensity}  label='Intensity' InputLabelProps={{ shrink: true }}></TextField>
                <TextField value={item.Date} label='Date' InputLabelProps={{ shrink: true }}></TextField>
                <Button sx={{backgroundColor:'red',color:'white',fontSize:'0.7em'}} variant='contained' onClick={()=>remove(index)}>Remove</Button>



               </Stack> 
            ))
         }
        <Stack direction={'row'} marginTop={4}  justifyContent={'center'} gap={2}>
                     <Button variant='contained' size='large' onClick={handleClose}>close</Button>
                     
                  </Stack>
      </Box>

        
      </Modal>
    
    
    </>
  )
}

export default Delete
