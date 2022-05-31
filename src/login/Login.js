import React,{useState} from 'react';
import amazon from "../Assets/Login/amazon.svg";
import { useNavigate } from 'react-router-dom';
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  return (
      <div className='login_wrapper d-flex flex-column align-items-center justify-content-center'>
          <img src={amazon} alt="amazon_img" className="amazon_img col-1" onClick={()=>navigate("/")}/>
          <div className='border rounded p-4 col-4 mt-3'>
              <h2 className='mb-3'>Sign-In</h2>
              <div className='d-flex flex-column'>
                  <h6 className='mb-0'>Email or mobile phone number</h6>
                  <input type="text" className='email_input mt-2' value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus/>
                  <button className='mt-4 continue_btn'>Continue</button>
              </div>
          </div>
          <div className='mt-3'>
              <small className='line'>New to Amazon ?</small>
          </div>
          <small className='create_account_btn col-4 mt-2' onClick={()=>navigate("/signup")}>Create your Amazon account</small>

    </div>
  )
}
