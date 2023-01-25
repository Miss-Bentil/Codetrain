import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Funcform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useradd, setUserAdd] = useState([]);

    const submitDeets = (e)=>{
        e.preventDefault();
        const newDeets = {myName:name,myEmail:email};
        setUserAdd([...useradd,newDeets])
        setName("");
        setPassword("");
        setEmail("");
    }

  return (
    <div>
        <div className="container m-5 text-center">
            <form onSubmit={submitDeets}>
                <div>
                    <input type="text" placeholder='Enter your name' className='w-50 p-2 border border-info' value= {name} 
                    onChange={(e)=>setName(e.target.value)} />
                    
                </div>
                

                <div>
                    <input type="text" placeholder='Enter your email' className='w-50 my-4 p-2 border border-success' value={email}
                    onChange = {(e)=>setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="password" placeholder='Enter your password'className='w-50 p-2 border border-warning' value={password} 
                    onChange = {(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='my-4'>
                <button type="submit" className='btn btn-outline-success mx-2' > Submit</button>
                <Link to={"/classform"}>
                <button type="button"className='btn btn-outline-danger'>ClassForm</button>
                </Link>
                

                </div>

            </form>

            <div className='my-2'>
            <h2>These are the names of the club members</h2>
                {useradd.map((item)=>{
                    return(
                        <>

                        <p>{item.myName}</p>
                    </>

                        
                    )
                }
                )
                
                
                
                }


            </div>


        </div>


      
    </div>
  )
}

export default Funcform
