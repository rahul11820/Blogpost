import { useState } from "react"
import "./topbar.css"
import { Link } from "react-router-dom"
export default function TopBar(){
    const [message,setMessage]=useState("")
    // const search = ()={
        
    // }
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><a class="nav-link" href="http://localhost:3001/">Home</a></li>
                    
                    <li className="topListItem"><a class="nav-link" href="/Write">Write</a></li>
                    <li className="topListItem"><a class="nav-link" href="/Single">SignIn</a></li>
                    <li className="topListItem">Register</li>
                    <li className="topListItem">Logout</li>
                </ul>
                
            </div>
            <div className="topRight">
            <Link to={"/Profile"} className="btn btn-primary"><img className="topImg" src=" https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg" alt=" "></img></Link>
                    
                    <input 
                    placeholder="Search Blog" 
                    type="text" 
                    value={message} 
                    onChange={(event)=>{setMessage(event.target.value)}}
                    />
                   
                    <Link to={"/search/"+message} className="btn btn-primary">
                    Search
                    </Link>
                   
                
            </div>
        </div>
    )
}

