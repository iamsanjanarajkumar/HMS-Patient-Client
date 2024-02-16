import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast} from 'react-toastify'

import './confirmation.css'

const URL = "http://localhost:3500"

const Confirmation = () => {
     const {token} = useParams();

     const params = useParams()
     const [userData, setUserData] = useState(null);

     const readFile = useCallback(() => {
        const readData = async () => {
          try {
           const response = await axios.get(`${URL}/api/patient/single/${params.id}`);
            setUserData(response.data);
            console.log(response.data);
          } catch (err) {
            toast.error(err.response.data.msg);
          }
        }
        readData()
    },[params.id])
  
    useEffect(() => {
      readFile()
    },[readFile])

  return (
    <div className='container-fluid p-3'>
        {/* {
            userData && (
                <div className='confirmation'>
                <img src="https://media4.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.webp?cid=790b7611pyonuvq365wzbpuwx54l92r2j45mdg5n5amu1a73&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt='checkmark' style={{width:"200px", height:"100px"}} />
                <h1>Hi{userData.data.name}! You’ve successfully scheduled your appointment at HMS Healthcare on [Date] at [Time].</h1>
                <h1>{userData.data.token}</h1>

     </div>
            )
        } */}
        {/* <h1>{token}</h1> */}
        <div className="row mt-2 ">
            <div className="col-md-4 offset-md-4">

                <div className="card p-5 border-0 shadow">
                   <div className="d-flex justify-content-center">
                   <img src="https://media4.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.webp?cid=790b7611pyonuvq365wzbpuwx54l92r2j45mdg5n5amu1a73&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="" className="w-100" />
                   </div>
                   <h1 className="fs-1">You're token is  {token}</h1>
                    <h1 className='fs-6 text-secondary text-center'>You’ve Token successfully Generated</h1>
                   
                    <button className="btn btn-primary fs-3 mt-3">Go to Home</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirmation

