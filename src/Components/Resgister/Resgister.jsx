import React from 'react'
import styles from './Resgister.module.css';
import { useFormik } from 'formik';

// useFormik

export default function Resgister() {
  function handleRegister(Values){
     console.log(Values);
  }
  function validate(values){
    let errors ={};
    // errors haib2a errors fadi w ai error ha7oto goa el object da ..
    //Name Errors ...
    if(!values.name){
      errors.name= ' Name is Required' ;
    }
    else if(values.name.length < 3){
      errors.name= ' Name MinLength is 3' ;
    }
    else if(values.name.length > 10){
      errors.name= ' Name MaxLength is 10' ;
    }

    //Email Errors ...
    if(!values.email){
      errors.email= ' Email is Required' ;
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email= ' Invalid email address' ;
    }
    
   //Password Errors ...
    if(!values.password){
      errors.password= ' Password is Required' ;
    }
    else if(!/^[A-Z][A-Z0-9]+\.[A-Z]{5,10}$/.test(values.password)){
      errors.password= 'Passsword Must Start With UpperCase....' ;
    }

    //RePassword Errors ...
    if(!values.repassword){
      errors.repassword= ' RePassword is Required' ;
    }
    else if(values.password !== values.rePassword){
      errors.repassword= ' Passsword And RePassword Doesnt Match...' ;
    }

    
    //Phone Errors ...
    if(!values.phone){
      errors.phone= ' phone is Required' ;
    }
    else if(!/^01[0125][0-9]{8}$/.test(values.phone)){
      errors.phone= 'Phone Must be valid  egyption phone number' ;
    }


    return errors;
  }
  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:'',
    },
    validate,
    // onSubmit:() => console.log('Hello')
    onSubmit: handleRegister
  })
  // useformik de el hook el 3amltlha import fo2 de w de bta5od object 
  // 1- el object da awel 7aga bya5odha hia initialValue > de el quem el mabda2ia ll inputs bta3ti el na ha3mel biha el form
  // example: el form bta3ti 3aiz yb2a fiha name password el hia hatb2a string fadi
  // 2- tani 7aga  bya5odha on submit > bab3atlo function el function de btshta8al lma el form de yt3amlha submit 
  // ()=> de keda arrow function 
  //na momken yb2a 3andi akter mn form signup form and register form
  // f nafs el component fa han3mel forimk2 w ha2ol l kol form el formik bta3tak anho wa7da 
  // el formik bt3amel 7aga gamila btab3at object gahez bel properties el mogoda 
  //fel initialValues w el values el etkatebet fiha ll method el asmha handleRegester
  //el object da byb2a asmo Values
  // keda na ba2ol ll foemik lma ya7sal submit nadi 3la el handelRegester
  return<>
  <div className="w-75 mx-auto py-4">
    <h3>Register Now: ..</h3>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        type="text" 
        name="name" 
        id="name" />
        {formik.errors.name && formik.touched.name ?<div className="alert alert-danger">{formik.errors.name}</div> : null}
     
      <label htmlFor="phone">Phone : </label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.phone}
        type="tel" 
        name="phone" 
        id="phone" />
        {formik.errors.phone && formik.touched.phone ?<div className="alert alert-danger">{formik.errors.phone}</div> : null}

      <label htmlFor="email">Email: </label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email" 
        name="email" 
        id="email" />
        {formik.errors.email && formik.touched.email ?<div className="alert alert-danger">{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password" 
        name="password" 
        id="password" />
         {formik.errors.password && formik.touched.password ?<div className="alert alert-danger">{formik.errors.password}</div> : null}

      <label htmlFor="rePassword">RePassword</label>
      <input className='form-control mb-2'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.rePassword}
        type="password" 
        name="rePassword" 
        id="rePassword" />
         {formik.errors.rePassword && formik.touched.rePassword ?<div className="alert alert-danger">{formik.errors.rePassword}</div> : null}

        <button type='submit' className='btn bg-main text-white'>Register</button>
    </form>
  </div>
  </>
  // handleSumit de bta3mel eh ? > el form kan fiha mo4kela an hia lma byt3amlha submit byt3amlha auto reload
  //a7na fel input bn7ot fel name w el id nafs el value el 3amlnha fel intial value 
  //value={formik.values.name} 3shan el value el hatgile ha7otha fel initial value fo2 + 
  //onChange={formik.handleChange} > bthandle ai change ya7sal w ts7abo w t7oto fel initialValues fo2 
  //value={formik.values.name} + onChange={formik.handleChange}
}

