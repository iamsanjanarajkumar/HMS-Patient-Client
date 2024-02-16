import React ,{useRef, useState} from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { toast} from 'react-toastify'
import './form.css'

const URL = "http://localhost:3500"


const Form = () => {

    const fName = useRef()
    const fMobile = useRef()
    const fEmail = useRef()
    const fGender = useRef()
    const fProblem = useRef()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const submitHandler = async(e) =>{
        e.preventDefault();
        setLoading(true)
        try {
           let data = {
            name:  fName.current.value,
            mobile: fMobile.current.value,
            email: fEmail.current.value,
            gender: fGender.current.value,
            problemDesc: fProblem.current.value
           } 
           console.log(`Data:` ,data);
           await axios.post(`${URL}/api/patient/create`, data)
           .then((res)=>{
            setLoading(false)
            console.log(res.data.data._id)
            toast.success(res.data.data.msg);
            
  
            
            navigate(`/confirmation/${res.data.data.token}`)
           })
           .catch(error=>{
            toast.error(error.message)
           })
           
            
           
        } catch (error) {
            console.log(error)
            // toast.error(error)
        }
    }
    if(loading){
        return(
            <div className="loader">
               <div className="text-center">
               <img src="https://www.icegif.com/wp-content/uploads/2023/10/icegif-939.gif" alt="" />
               <h1 className="fs-5">Please Wait...</h1>
               </div>
            </div>
        )
    }
  return (
    <div className='container-fluid bg-light token-book-container p-1 p-md-3 py-5 '>
        <div className="container shadow bg-white rounded-3">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="book-left p-0 p-md-5 images">
                        <img src="https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg" alt="" className="w-100"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="book-right p-3 px-md-4">
                        {/* <h1 className="fs-4 fw-bold mb-3">Welcome to HMS Healthcare!</h1> */}
                             <div className='textLoop'>
                             <Typewriter
                                options={{
                                    strings: "Welcome to HMS Healthcare!",
                                    autoStart: true,
                                    loop: true
                                }}
                                />
                           
                            </div>
                        <form action="" onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control"placeholder='Enter username' ref={fName}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control"placeholder='Email Address (optional)' ref={fEmail} />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control"placeholder='Enter username' />
                            </div> */}
                            <div className="row align-items-center">
                                <div className="col-8 col-md-7">
                                <div className="form-group mt-3">
                                        <label htmlFor="" className="form-label">Phone</label>
                                        <input type="text" className="form-control"placeholder='+91-XXX-XXXX-XXX' ref={fMobile} />
                            </div>
                                </div>
                                <div className="col-4 col-md-5">
                              <div className="form-group mt-3">
                              <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" id="gender" className="form-select" ref={fGender}>
                                            <option value="male" ref={fGender}>Male</option>
                                            <option value="female" ref={fGender}>Female</option>
                                            <option value="other" ref={fGender}>Other</option>
                                        </select>
                                </div>
                              </div>
                            </div>
                           
                            <div className="form-group mt-3">
                                <label htmlFor="" className="form-label">Problem</label>
                                        <select name="gender" id="gender" className="form-select" ref={fProblem}>
                                            <option >Select an Option</option>
                                            <option value="cold">Colds & Flu</option>
                                            <option value="allergy">Allergies</option>
                                            <option value="headache">Headaches</option>
                                            <option value="diarrhea">Diarrhea / Stomach Aches</option>
                                            <option value="other">Other</option>
                                        </select>
                            </div>
                            <button className="book-btn">Book an Appointment </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
