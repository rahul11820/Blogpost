//import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link ,useNavigate} from "react-router-dom"
export default function Sucess(){
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

    



    return(
        <div >
           <h1>SucessFully Logged In!!! </h1>
            <div>
                Click on the home 
                <Link to={"/Home"}>Home</Link>
            </div>
            

        </div>
    )

}
