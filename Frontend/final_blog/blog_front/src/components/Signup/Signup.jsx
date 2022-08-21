import "./signup.css"
import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
export default function Signup(){
    const [username, setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    //const [bodyparams,setBodyparams]=useState({"blogid":"","userid":"","title":"","content":"","img":""})
    // const [blogid1,setblogid] =useState(2);
    // const [userid1,setuserid] =useState(2);
    const navigate=useNavigate()
    const redirectToHome = ()=> {
        <Link to="/"></Link>
    }

    const addUser = async ()=> {

        
        

        
        const a=await axios.post("http://[::1]:3000/signup",{
            "username":username,
            "email":email,
            "password":password
        })
        
        if(a.data===0)
        {
            navigate("/Again")
        }
        else
        {
            navigate("/Signin")
        }

    }



    return(
        <div className="maincontainer2">
            <form className="formcontainer5">
            <div className="formcontainer6">
            <h3 className="header3" >Sign Up</h3>
            <div>
            <label className="label">Username</label>
                <input className="text8"
                    type ="text"
                    
                    value={username}
                    onChange={(event)=>{setUsername(event.target.value)}}
                />
                
            </div>
            <div>
            <label className="label">Email</label>
                <input className="text9" 
                    type ="text"
                    
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                />
                
            </div>
            <div>
            <label className="label">Password</label>
                <input className='text10'
                    type ="text"
                   
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                />
                
            </div>
            </div>
            </form>
            <button className="button2"  onClick={addUser}>Signup</button>
            <div className="bottom1">
                Already have a account?
                <Link to={"/Signin"}>Sign In</Link>
            </div>
        </div>
    )

}
