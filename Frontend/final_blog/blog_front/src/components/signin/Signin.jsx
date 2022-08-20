//import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link ,useNavigate} from "react-router-dom"
export default function Signin(){
    //const [username, setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()
    //const [bodyparams,setBodyparams]=useState({"blogid":"","userid":"","title":"","content":"","img":""})
    // const [blogid1,setblogid] =useState(2);
    // const [userid1,setuserid] =useState(2);
    const redirectToHome = ()=> {
        <Link to="/"></Link>
    }

    const addUser = async ()=> {

        
        

        
        const a=await axios.post("http://[::1]:3000/signin",{
            //"username":username,
            "email":email,
            "password":password
        })
        window.localStorage.setItem('id', JSON.stringify(a.data))
        const id=window.localStorage.getItem('id')
        if(id==='0')
        {
            navigate("/False")
        }
        else
        {
            navigate("/Home")
        }

    }



    return(
        <div >
            <form>
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
            <button onClick={addUser}>SignIn</button>
            <div>
                Dont have a account?
                <Link to={"/Signup"}>Sign Up</Link>
            </div>
            

        </div>
    )

}
