<<<<<<< HEAD

import "./signin.css"
import "bootstrap/dist/css/bootstrap.min.css"
=======
//import "./write.css"
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
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
<<<<<<< HEAD
        <div className="maincontainer">
            <form className="formcontainer">
            <div className="formcontainer2">
            <h3 className="header3" >Sign In</h3>
            <div >
            <label className="label">Email address</label>
                <input  className="text1"
                    type ="text"
                  
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                />
           
            </div>
            
            <div >
            <label className="label">Password</label>
                <input  className="text2" 
                    type ="text"
                   
=======
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
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}}
                />
                
            </div>
<<<<<<< HEAD
            </div>
            </form>
            <button className="button" onClick={addUser}>SignIn</button>
            
            
            <div className="bottom">
=======
            
            </form>
            <button onClick={addUser}>SignIn</button>
            <div>
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
                Dont have a account?
                <Link to={"/Signup"}>Sign Up</Link>
            </div>
            
<<<<<<< HEAD
           
        </div>
    )

}
=======

        </div>
    )

}
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
