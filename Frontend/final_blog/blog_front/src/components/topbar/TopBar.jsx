import { useState } from "react"
import "./topbar.css"
import { Link,useNavigate } from "react-router-dom"


export default function TopBar(){
    const [message,setMessage]=useState("")
    // const search = ()={
        const navigate = useNavigate()

        const user_id=window.localStorage.getItem('id')
        let flag = false
        console.log(user_id)
    if(user_id==='0')
    {
        flag=true
        
    }
        
    // }
    const logout1 = () => {
        console.log(window.localStorage.getItem('id'))
        window.localStorage.setItem('id', JSON.stringify(0))
        console.log(window.localStorage.getItem('id'))
        navigate("/Logout")
    }

    const Write1 = () => {
        
        navigate("/Write")
    }
    function SigninSignup(){
        return (
            <>
            <li className="topListItem"><a class="nav-link" href="/Signup" >SignUp</a></li>
            <li className="topListItem"><a class="nav-link" href="SignIn" >SignIn</a></li> 
            </>
            )
    }
    function Notlogged(){
        return (
            <>
            <li className="topListItem" onClick={logout1}>Logout</li>
            </>
            )
    }
     

    return(
        <div className="top">
           
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><a class="nav-link" href="http://localhost:3001/home">Home</a></li>
                    

                    <li className="topListItem" onClick={Write1}>Write </li>
                    {/* <li className="topListItem"><a class="nav-link" href="/Signin">SignIn</a></li>
                    <li className="topListItem"><a class="nav-link" href="/Signup">Signup</a></li> */}
                     {flag&&<SigninSignup />}
                     {!flag&&<Notlogged />}
                    
                </ul>
                
            </div>
            <div className="topRight">
           
                    
                    <input className="search"
                    placeholder="Search Blog" 
                    type="text" 
                    value={message} 
                    onChange={(event)=>{setMessage(event.target.value)}}
                    />
                   
                   <button className="button3"> <Link to={"/search/"+message} >
                    Search
                    </Link></button>
                   <Link to={"/Profile"} > <i className="profile fa-solid fa-user" ></i></Link>
                
            </div>
        </div>
    )
}

