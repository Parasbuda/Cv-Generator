import React from "react"
import {Link} from "react-router-dom"

const Form=(props)=>{  
       const {change,submit}=props
        return(
            <div className="card"> 
                <div className=" card-content">
                    <form onSubmit={submit}> 
                      
                       <span>FirstName:</span>
                       <div className="input-field">
                           <input type="text" name="fname"
                         onChange={change}   placeholder="Enter the First Name"/>
                       </div>
                       <span>LastName:</span>
                       <div className="input-field">
                           <input type="text" name="lname"
                         onChange={change}    placeholder="Enter the Last Name"/>
                       </div>
                       <span>Date of Birth:</span>
                       <div className="input-field">
                           <input type="text" name="dob" 
                            onChange={change}  placeholder="Enter the Date Of Birth"/>
                       </div>
                       <span>Address:</span>
                       <div className="input-field">
                           <input type="text" name="address" 
                             onChange={change} placeholder="Enter the Address"/>
                       </div>
                       <span>Contact:</span>
                       <div className="input-field">
                           <input type="text" name="contact"
                          onChange={change}   placeholder="Enter the Contact"/>
                       </div>
                       <button className="btn wave-darken" type="submit">
                           <Link to="/showcv">Generate Cv</Link></button>
                    </form>
                </div>
            </div>
       
        )
       
    }
    
export default Form
