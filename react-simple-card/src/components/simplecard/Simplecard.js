import React from 'react'
import boldtype from '../assets/boldtype.jpg'
import Title from '../title/Title'
import './Simplecard.css'
import Description from '../description/Description'


const Simplecard = () => {
  return (
    <div>
      <div className="container">
        <img src={boldtype} alt="image" className='span-two'/>
        <div className='wrapper'>
            <Title/>
            <Description/>
        </div>




      </div>
    </div>
  )
}

export default Simplecard
