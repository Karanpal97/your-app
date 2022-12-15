import React from 'react'
//import PropTypes from "prop-types"
//import {a} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
        
   <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="/">{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#" style={{color:props.mode==="light"?"#042743":"white"}}></a>
        </li>
        <li className="nav-item">
          <a className="nav-a" to="/">{props.about}</a>
        </li>
        {/*<li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:props.mode==="light"?"#042743":"white"}}>
          
          </a>
          <ul className="dropdown-menu">                                                   
            <li><a className="dropdown-item" href="/" style={{color:props.mode==="light"?"#042743":"white"}}></a></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==="light"?"white":"#042743"}}></a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/" style={{color:props.mode==="light"?"white":"#042743"}}></a></li>
          </ul>
  </li>*/}
        <li className="nav-item">
          <a className="nav-a disabled"  style={{color:props.mode==="light"?"":"#042743"}}></a>
        </li>
      </ul>
    {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
      <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"} mx-4`}>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Light Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
