import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import amazon from "../Assets/Login/amazon.svg";
import "./signup.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  }
  return (
    <div className='signup_wrapper col-12'>
        <img src={amazon} alt="amazon_logo"  className="col-1 mb-2"/>
      <div className='col-4 border rounded px-3 py-3'>
        <h3 className='mb-0 pt-2 pb-3'>Create Account</h3>
        <div>
          <h6 className=''>Your name</h6>
          <input type="text" className='email_input col-12 px-2' name="name" value={formInput["name"]} onChange={handleChange}/>
        </div>

        <div className='mt-3'>
          <h6 className=''>Mobile number</h6>
          <input type="text" className='email_input col-12 px-2' value={formInput["mobile"]} onChange={handleChange} placeholder="Mobile number"/>
        </div>

        <div className='mt-3'>
          <h6 className=''>Email (optional)</h6>
          <input type="text" className='email_input col-12 px-2' name="email" value={formInput["email"]} onChange={handleChange}/>
        </div>

        <div className='my-3'>
          <h6 className=''>Password</h6>
          <input type="password" className='email_input col-12 px-2' name="password" value={formInput["password"]} onChange={handleChange} placeholder="Atleast 6 characters"/>
        </div>

        <small>We will send you a text to verify your phone.
          Message and Data rates may apply.</small>
        
        <button className='continue_btn d-block col-12 mx-auto my-2'>Continue</button>

        <hr className='col-9 mx-auto' />
        
        <small>Already have an account? <span className='text-primary signIn_anchor' onClick={()=>navigate("/login")}>Sign in</span></small>

      </div>
    </div>
  )
}
