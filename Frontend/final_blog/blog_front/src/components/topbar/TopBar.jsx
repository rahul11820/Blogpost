import { useState } from "react"
import "./topbar.css"
import { Link,useNavigate } from "react-router-dom"


export default function TopBar(){
    const [message,setMessage]=useState("")
    // const search = ()={
        const navigate = useNavigate()
        
    // }
    const logout1 = () => {
        console.log(window.localStorage.getItem('id'))
        window.localStorage.setItem('id', JSON.stringify(0))
        console.log(window.localStorage.getItem('id'))
        navigate("/Signin")
    }
    const Write1 = () => {
        
        navigate("/Write")
    }

    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><a class="nav-link" href="http://localhost:3001/home">Home</a></li>
                    
                    <li className="topListItem" onClick={Write1}>Write </li>
                    {/* <li className="topListItem"><a class="nav-link" href="/Signin">SignIn</a></li>
                    <li className="topListItem"><a class="nav-link" href="/Signup">Signup</a></li> */}
                    <li className="topListItem" onClick={logout1}>Logout</li>
                </ul>
                
            </div>
            <div className="topRight">
            <Link to={"/Profile"} ><img className="topImg" src=" https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg" alt=" "></img></Link>
                    
                    <input 
                    placeholder="Search Blog" 
                    type="text" 
                    value={message} 
                    onChange={(event)=>{setMessage(event.target.value)}}
                    />
                   
                   <button className="button3"> <Link to={"/search/"+message} >
                    Search
                    </Link></button>
                   
                
            </div>
        </div>
    )
}

