import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { BrowserRouter, Routes } from 'react-router-dom'




import { Route } from 'react-router-dom'


import Bmi from './pages/Bmi.jsx'
import Pnf from './pages/Pnf.jsx'
import Page2 from './pages/Page2.jsx'
import Container from './components/Container.jsx'







createRoot(document.getElementById('root')).render(

  // <StrictMode>

   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
       <Route path='/add' element={<Container></Container>}></Route>
      
      <Route path='/bmi' element={<Bmi></Bmi>}></Route>
      <Route path='/page2' element={<Page2></Page2>}></Route>
      <Route path='/his' element={<History></History>}></Route>
     
      <Route path='*' element={<Pnf></Pnf>}></Route>
    </Routes>
    </BrowserRouter>
   
   
  // </StrictMode>
)
