import React from "react"
import {Link ,withRouter} from "react-router-dom"

const Nav=()=>{
    return(
       
         <nav className="nav-wrapper blue darken">
         <a  className="brand-logo" >Cv-Generator</a>
         <ul  className="right hide-on-med-and-down">
             <li><Link to="/">Home</Link></li>
             <li><Link to="/form">Form</Link></li>
             <li><Link to="/about">About</Link></li> 
             
         </ul>
        
         
        </nav>
        
      
    )
    
}
export default withRouter(Nav)