import React, { Component } from "react";

export default class Classform extends Component {
    constructor() 
    {
        super();
        this.state={
            
                name: "",
                email: "",
                password: ""


            
                
        }

    }

  

    handlesubmitDeets = (e)=> {
        e.preventDefault();
        const newdeets = {namee:this.name, emaill: this.email}
    
        this.setState ()

    }



    handleChange = (e)=> {
        this.setState(e.target.value)
    }




  render() {
    

    return (
      <div>
        <div className="container my-5 text-center">
          <form onSubmit={this.submitDeets}>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-50 p-2 border "
                value={this.state.name}
                onChange={(e)=>{this.setState({name:e.target.value})}}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-50 my-4 p-2 border "
                value={this.state.email}
                onChange={(e)=>{this.setState({email:e.target.value})}}

                
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-50 p-2 border "
                value={this.state.password}
                onChange={(e)=>{this.setState({password:e.target.value})}}
              />
            </div>
            <div className="my-4">
              <button type="submit" className="btn btn-outline-success mx-2">
             
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
