import React from 'react'
import './Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'


const Title = () => {
  return (
    <div className='title'>
        <div className='name'>
        <h1>The Bold Type</h1>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </div>

      <p> Season 5</p>
    </div>

  
  


  )
}

export default Title
