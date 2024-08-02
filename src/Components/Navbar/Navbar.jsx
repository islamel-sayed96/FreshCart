import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/images/picnic-basket_10484118.png'
import { Link } from 'react-router-dom';
//Link 3shan n7awel kol el a > Link 3shan el routing 



export default function Navbar({userData}) {
  //el userData na wa5edha mn app ll navbar w el navbar msh abn ll app fa kan lazem ab3tha el awel ll layout 
  //a el navbar astlmha w 3amlha detracting
  return<>
  {/* bs5-navbar > bakteb el de keda 3shan a create navbar mn el bootstrap w da bsbb extention bootstrap 5 siperts*/}
  <nav
    className="navbar navbar-expand-sm navbar-light bg-light"
  >
    <div className="container">
      <a className="navbar-brand fw-bolder" to="/"><i className='fa fa-cart-shopping text-success'></i> FreshCart</a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">

      {userData !==null ? <ul className="navbar-nav me-auto mt-2 mt-lg-0">
       
       <li className="nav-item">
         <Link className="nav-link" to="/">Home</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/">Cart</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="products">Products</Link>
       </li>
       
       <li className="nav-item">
         <Link className="nav-link" to="categories">Categories</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="brands">Brands</Link>
       </li>

     </ul>:null}

        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className='nav-item d-flex align-items-center'>
            <i className='fab mx-2 fa-facebook'></i>
            <i className='fab mx-2 fa-twitter'></i>
            <i className='fab mx-2 fa-instagram'></i>
            <i className='fab mx-2 fa-tiktok'></i>
            <i className='fab mx-2 fa-linkedin'></i>
            <i className='fab mx-2 fa-youtube'></i>
          </li>
       
       {userData === null?        <>
        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li>
       </>:    <li className="nav-item">
         <Link className="nav-link" to="logout">Logout</Link>
       </li> }

        </ul>

      </div>
    </div>
  </nav>
  
  </>
}

