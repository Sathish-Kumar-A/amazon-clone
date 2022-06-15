import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import API from "../axios";
import * as Yup from "yup";
import amazon from "../Assets/Login/amazon.svg";
import "./signup.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [click,setClick]=useState(false);
  const formInput = {
    name: "",
    email: "",
    mobile: "",
    password: ""
  };

  const formik = useFormik(
    {
    initialValues: formInput,
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Name is too long").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.number().min(10).required("Mobile is required"),
      password: Yup.string().min(6, "Password is too short").required("Password is required")
    }),
    onSubmit: () => {
      signup();
    }
  },
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormInput({ ...formInput, [name]: value });
  }

  const signup = async() => {
    const headers = {
      email: formik.values.email,
      mobile: formik.values.mobile,
      password: formik.values.password
    }
    console.log(headers);
    setClick(true);
    try {
      let signupResponse = await API.post("/signup", "", { headers });
      console.log(signupResponse);
      if (signupResponse.status === 201) { 
        toast.success("Signup Successful");
        navigate("/");
      }
    } catch (error) {
      toast.error("Signup Failed");
      console.log(error);
    }
    setClick(false);
  }
  return (
    <div className='signup_wrapper col-12'>
        <img src={amazon} alt="amazon_logo"  className="col-1 mb-2"/>
      <div className='col-4 border rounded px-3 py-3'>
        <h3 className='mb-0 pt-2 pb-3'>Create Account</h3>

        <form onSubmit={formik.handleSubmit}>
        <div>
          <h6 className=''>Your name</h6>
            <input
              type="text"
              className='email_input col-12 px-2'
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {(formik.touched.name && formik.errors.name) && <small className='mb-0 text-danger'>{formik.errors.name}</small>}
        </div>

        <div className='mt-2'>
          <h6 className=''>Mobile number</h6>
            <input
              type="text"
              className='email_input col-12 px-2'
              value={formik.values.mobile}
              placeholder="Mobile number"
              name="mobile"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {(formik.touched.mobile && formik.errors.mobile) && <small className='mb-0 text-danger'>{formik.errors.mobile}</small>}
        </div>

        <div className='mt-2'>
          <h6 className=''>Email</h6>
            <input
              type="text"
              className='email_input col-12 px-2'
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {(formik.touched.email && formik.errors.email) && <small className='mb-0 text-danger'>{formik.errors.email}</small>}
        </div>

        <div className='my-2'>
          <h6 className=''>Password</h6>
            <input
              type="password"
              className='email_input col-12 px-2'
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Atleast 6 characters"
            />
            {(formik.touched.password && formik.errors.password) && <small className='mb-0 text-danger'>{formik.errors.password}</small>}
          </div>
          <input type="submit" className='continue_btn d-block col-12 mx-auto my-2' value="Continue" disabled={click} />
          </form>

        <small>We will send you a text to verify your phone.
          Message and Data rates may apply.</small>
        

        <hr className='col-9 mx-auto' />
        
        <small>Already have an account? <span className='text-primary signIn_anchor' onClick={()=>navigate("/login")}>Sign in</span></small>

      </div>
    </div>
  )
}
