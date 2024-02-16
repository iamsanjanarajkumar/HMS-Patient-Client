import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Form from './components/Form/Form'
import Confirmation from './components/ConfirmationMessage/Confirmation'


const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer autoclose={3000} position={'top-right'}/>
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/confirmation/:token' element={<Confirmation/>} />
    </Routes>
       
       
    </BrowserRouter>
  )
}

export default App
