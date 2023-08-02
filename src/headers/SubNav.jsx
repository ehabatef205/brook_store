import React from 'react'
import { Container } from 'react-bootstrap'
import './style/nav.css'
function SubNav() {
  return (
    <div className= "w-100">
<nav className="navbar navbar-expand-lg w-100 ">
<div className="d-flex  w-100">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
<div className="collapse navbar-collapse subnav-container" id="navbarTogglerDemo03">
   <ul className="navbar-nav me-auto mb-lg-0   w-100 d-flex justify-content-around">
     <li className="nav-item subnav ">
       <a className="nav-link  " aria-current="page" href="/Productpage">New</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Massage</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Wellness</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Sleep</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Home</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Wine & Bar</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Fitness</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Outdoor</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Technology</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Travel</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Accessories</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Entertainment</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Gifts</a>
     </li>
     <li className= "nav-item subnav ">
       <a className=" nav-link " aria-current="page" href="#">Sale</a>
     </li>
     </ul>
</div>
</div>
</nav>
    </div>
  )
}

export default SubNav

