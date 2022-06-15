import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useStateValue } from '../context/StateProvider';
import API from "../axios";
import amazon from "../Assets/Login/amazon.svg";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Password is too short").required("Password is required")
        }),
        onSubmit: () => { 
            login();
        }
    })
    const navigate = useNavigate();
    const [state, dispatch] = useStateValue();

    const login = async() => {
       try {
            let loginResponse = await API.post("login","", {
                headers: {
                    email:formik.values.email,
                    password:formik.values.password
                }
            });
           const { data } = loginResponse;
           dispatch({
               type: "UPDATE_CREDENTIALS",
               payload:data["data"]
           });
           toast.success("Login Successful");
           navigate("/");
           
       } catch (error) {
           console.log(error);
       }
        
    }
  return (
      <div className='login_wrapper d-flex flex-column align-items-center justify-content-center'>
          <img src={amazon} alt="amazon_img" className="amazon_img col-1" onClick={()=>navigate("/")}/>
          <div className='border rounded p-4 col-4 mt-3'>
              <h2 className='mb-3'>Sign-In</h2>
              <form className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                  <div >
                    <h6 className='mb-0'>Email or mobile phone number</h6>
                      <input
                          type="text"
                          className='email_input mt-2 col-12'
                          value={formik.values.email}
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          autoFocus
                      />    
                  </div>
                  <div>
                    <h6 className='mb-0 mt-3'>Password</h6>
                      <input
                          type="password"
                          className='email_input mt-2 col-12'
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                  </div>
                  <button type='submit' className='mt-4 continue_btn' >Continue</button>
              </form>
          </div>
          <div className='mt-3'>
              <small className='line'>New to Amazon ?</small>
          </div>
          <small className='create_account_btn col-4 mt-2' onClick={()=>navigate("/signup")}>Create your Amazon account</small>
    </div>
  )
}
