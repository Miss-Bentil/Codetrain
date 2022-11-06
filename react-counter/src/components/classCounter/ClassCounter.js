
import React from 'react';
import './ClassCounter.css'




class ClassCounter extends React.Component {
    constructor () 
    {
        super();
        this.state={
            count:0
            
        }

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease(e){
        e.preventDefault();
        this.setState({count: this.state.count + 1})
    }

    handleDecrease(e){
        e.preventDefault();
        this.setState({count: this.state.count - 1})

    }

    render()
    {
        return(

        <div className="container">
            <h1>Class Counter</h1>
            <div className="wrapperr">
                <div className="increase" onClick={this.handleIncrease}>+</div>
                <div className="numberr">{this.state.count}</div>
                <div className="decrease" onClick={this.handleDecrease}>-</div>


            </div>



        </div>

        )


    }
}

export default ClassCounter;