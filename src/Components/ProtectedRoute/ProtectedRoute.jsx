import React from 'react'
import styles from './ProtectedRoute.module.css';
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute(props) {
  console.log(props.children);
  if(localStorage.getItem('userToken') == null){
    //Navigate Login
    return <Navigate to={'/login'}/>
  }
  else{
    //Navigate.
    return props.children;
  }
  

}

