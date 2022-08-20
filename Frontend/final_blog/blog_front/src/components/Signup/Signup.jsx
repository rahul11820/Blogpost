//import "./write.css"
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
    }



    return(
        <div className="Write">
            <form>
            <div>
                <input
                    type ="text"
                    placeholder='Username'
                    value={username}
                    onChange={(event)=>{setUsername(event.target.value)}}
                />
                
            </div>
            <div>
                <input
                    type ="text"
                    placeholder='email'
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                />
                
            </div>
            <div>
                <input
                    type ="text"
                    placeholder='password'
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                />
                
            </div>
            
            </form>
            <button onClick={addUser}>Signup</button>
            <div>
                Already have a account?
                <Link to={"/Signin"}>Sign In</Link>
            </div>
        </div>
    )

}
