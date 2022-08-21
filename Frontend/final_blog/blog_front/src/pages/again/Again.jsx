//import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link ,useNavigate} from "react-router-dom"
export default function Again(){
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
           <h1>Try Again </h1>
            <div>
                <div>Reasons Signup Failed</div>
                <ul>
                    <li>feilds Left Blank</li>
                    <li>Information put may already exist</li>
                </ul>
                Please Click<Link to={"/Signup"}>TryAgain</Link>
            </div>
            

        </div>
    )

}
