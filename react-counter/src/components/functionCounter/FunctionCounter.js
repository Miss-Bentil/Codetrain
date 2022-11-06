import React, { useState } from 'react'
import './FunctionCounter.css'

const FunctionCounter = () => {
    const[value, setValue] = useState(0);

    function handleDecrease () {
        setValue(prevCount => prevCount - 1)

    }

    function handleIncrease () {
        setValue(prevCount => prevCount +1)

    }


  
  
  
    return (



    <div>
        <div className="container">
            <h1>Function Counter</h1>
            <div className="wrapper">
                <div className="increaseUp" onClick={handleIncrease}>+</div>
                <div className="number">{value}</div>
                <div className="decreaseDown" onClick={handleDecrease}>-</div>


            </div>



        </div>

      
    </div>
  )
}

export default FunctionCounter
