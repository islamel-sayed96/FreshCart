import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assets/images/picnic-basket_10484118.png'


export default function Navbar() {
  return<>
  {/* bs5-navbar > bakteb el de keda 3shan a create navbar mn el bootstrap w da bsbb extention bootstrap 5 siperts*/}
  <nav
    class="navbar navbar-expand-sm navbar-light bg-light"
  >
    <div class="container">
      <a class="navbar-brand fw-bolder" href="#"><i className='fa fa-cart-shopping text-success'></i> FreshCart</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
       
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Cart</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Brands</a>
          </li>

        </ul>
        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
          <li class='nav-item d-flex align-items-center'>
            <i className='fab mx-2 fa-facebook'></i>
            <i className='fab mx-2 fa-twitter'></i>
            <i className='fab mx-2 fa-instagram'></i>
            <i className='fab mx-2 fa-tiktok'></i>
            <i className='fab mx-2 fa-linkedin'></i>
            <i className='fab mx-2 fa-youtube'></i>
          </li>
       
       <li class="nav-item">
         <a class="nav-link" href="#">Login</a>
       </li>

       <li class="nav-item">
         <a class="nav-link" href="#">Register</a>
       </li>

       <li class="nav-item">
         <a class="nav-link" href="#">Logout</a>
       </li>
  

        </ul>

      </div>
    </div>
  </nav>
  
  </>
}

