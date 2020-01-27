import React from "react"

const Show=(props)=>{
        const {data}=props
       
            return(
                <div className="container">
                    <div className="card">
                        <span className="card-title">Your Cv is below:</span>
                        <div className="card-content red-text">
                                    <div>{data.fname}</div>
                                    <div>LastName:{data.lname}</div>
                                    <div>Date of Birth:{data.dob}</div>
                                    <div>Address:{data.address}</div>
                                    <div>Conatct:{data.contact}</div>
                                </div>
                            </div>
                        </div>
                  
                
            )
        
       
    
}
    export default Show
