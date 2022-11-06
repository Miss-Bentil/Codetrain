import React from 'react'
import Img from "../assets/Img.js"
import './Description.css'


const Description = () => {
    return (
        <div>
            <div className='rating'>
                <Img />
                <p style= {{marginLeft:"8px", fontWeight:"700",color:"black"}}>5.0</p>
            </div>
            <p style={{marginBottom:"20px"}}>(80 ratings & 20 reviews)</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias adipisci minima ipsum reiciendis nobis veniam quis reprehenderit, consequuntur veritatis error. Obcaecati est rerum molestiae dolore aliquid velit repellendus cum?</p>
        </div>
    )
}

export default Description
