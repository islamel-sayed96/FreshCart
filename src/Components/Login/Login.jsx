import React, { useState } from 'react'
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//keda na ba2olo import kol 7aga mn el yup ..
//useNavigate react router dom da hook hia 3amlha 



// useFormik

export default function Login({saveUserData}) {
  //de keda {saveUserData} el props na momken a5liha ba x w anzel a2ol log x.saveUserData 
  //bs a7na 3amlna destrakting 3la tol
  let navigate = useNavigate();
  const [isloading, setisloading] = useState(false); //loading spiner for register


  async function handleLogin(values) {
    setisloading(true);
    try {
      let response = await axios.post('https://localhost:7125/api/Account/Login', values, {
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        }
      });
      let { data, status } = response;
  
      // Check the status code and data message
      if (status === 200 && data.token) {
        localStorage.setItem('userToken' , data.token);
        saveUserData();
        setisloading(false);
        navigate('/');
      } else {
        console.log('Unexpected response:', data);
        setisloading(false);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.error('User not found.');
        } else if (error.response.status === 415) {
          console.error('Unsupported Media Type: Check the request headers and body format.');
        } else {
          console.error('Error:', error.response.status, error.response.data);
        }
      } else {
        console.error('Error during login:', error);
      }
      setisloading(false);
    }
  }

  //Yup Validation
  let validationSchema = Yup.object({
    userName:Yup.string().required('Name is required').min(3 , 'Name minlength is 3').max(10 , 'Name maxlength is 10'),
    
    password:Yup.string().required('password is required').matches(/^[A-Z][A-Z0-9]{5,10}$/ , 'Password Must Start with UpperCase...'),
   
  })
  

  let formik = useFormik({
    initialValues:{
      userName:'',
      
      password:'',
  
    },
    
    validationSchema,
    
    onSubmit: handleLogin
  });
  return<>
  <div className="w-75 mx-auto py-4">
    <h3>lOGIN Now: ..</h3>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">userName</label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.userName}
        type="text" 
        name="userName" 
        id="userName" />
        {formik.errors.userName && formik.touched.userName ?<div className="alert alert-danger">{formik.errors.userName}</div> : null}
     
      
      <label htmlFor="password">Password</label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password" 
        name="password" 
        id="password" />
         {formik.errors.password && formik.touched.password ?<div className="alert alert-danger">{formik.errors.password}</div> : null}

        {isloading? <button  type='button' className='btn bg-main text-white'> <i className='fas fa-spinner fa-spin'></i> </button>: 
        <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Login</button>
        }


    </form>
  </div>
  </>
  // handleSumit de bta3mel eh ? > el form kan fiha mo4kela an hia lma byt3amlha submit byt3amlha auto reload
  //a7na fel input bn7ot fel name w el id nafs el value el 3amlnha fel intial value 
  //value={formik.values.name} 3shan el value el hatgile ha7otha fel initial value fo2 + 
  //onChange={formik.handleChange} > bthandle ai change ya7sal w ts7abo w t7oto fel initialValues fo2 
  //value={formik.values.name} + onChange={formik.handleChange}
}



