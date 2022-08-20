//import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link ,useNavigate} from "react-router-dom"
export default function Logout(){
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
           <h1>Logged Out</h1>
            <div>
                <div>Thank You for Being on the Page</div>
                <Link to={"/Signin"}>Sign In Again</Link>
            </div>
            

        </div>
    )

}
