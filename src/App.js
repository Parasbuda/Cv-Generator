import React, { Component } from 'react';
import Nav from "./component/nabbar.js"
import Home from "./component/home.js"
import {BrowserRouter, Route} from "react-router-dom"
import Form from "./component/form.js"
import About from "./component/about.js"
import Show from "./component/showcv"

class App extends Component { 

  state={
    fname:"",
    lname:"",
    dob:"",
    address:"",
    contact:""
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
      
    })
    
  }
  onSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name]:e.target.value
    })
  
  }
  

  render() {
    return (
      <BrowserRouter>
       <div className="container">
        
            <Nav/> 
            <Route exact path="/" component={Home}/> 
            <Route path="/form" render={(props)=> <Form {...props} change={this.handleChange} 
            submit={this.onSubmit}/>} />
            <Route path="/about" component={About}/>
            <Route path="/showcv" render={(props)=><Show {...props} data={this.state}/>}/>
           
            </div>
            
          </BrowserRouter>
         
    );

  }
}

export default App;
