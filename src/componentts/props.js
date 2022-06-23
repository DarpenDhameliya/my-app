import React from 'react'
import PropTypes from 'prop-types' // short key for import is impt
import { Link } from 'react-router-dom'


export default function Nevprops(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/useState">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  aria-current="page" to="/mod">about</Link>
        </li>  
         
      </ul>
      <form className="d-flex" role="search">
        {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>*/}
        <div className={` form-check form-switch text-dark `}>
          <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault"  onClick={props.darkmode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>  
       </div>
       
      </form>
    </div>
  </div>
</nav>
  )
}


// set for validation , must know about first proptype s p is small letters
Nevprops.propTypes = {
    title: PropTypes.string.isRequired,
    Link: PropTypes.string 
}


// set default values . its optional 
Nevprops.defaultProps ={
    title: 'set title hear',
    Link: 'about details'
}


// write in app.js file//import Nevprops from './componentts/props';//import file wherever you write its required
// write in return portion //<Nevprops title="softstorm" Link="about" />