import "./profile.css"
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from "react"
import {
    BrowserRouter ,
    Routes,
 Route,
    Link,
    useNavigate,
    // etc.
  } from "react-router-dom";
import TopBar from '../../components/topbar/TopBar';
export default function Profile(){

    const navigate= useNavigate()

    const [blogs, setBlogs]=useState([])
    // const [img, setImg]=useState("")
    // const [title, setTitle]=useState("")
    // const [content,setContent]=useState("")
    const user_id=window.localStorage.getItem('id')
    const Profile = async () => {
        const blogdata = await axios.get("http://[::1]:3000/user/"+user_id )
        setBlogs(blogdata.data)
        //console.log(blogdata.data)
        

    }
    let flag = false
    if(user_id==='0')
    {
        flag=true
    }
    

    function Notlog(){
        return(
            <div>
                <h1>Not Logged In</h1>
            </div>
        )
    }
    useEffect(()=>{
        Profile();
    },[])

    const delblog = async (blogid) => {
        await axios.delete("http://[::1]:3000/blog/"+blogid)
        window.location.reload(false);
    }

    return(
        
        <>
        <TopBar />
        {flag&&<Notlog/>}
            { blogs.map((blog)=>{
                return(
                    <div className="post">
                        {console.log(blog.id)}
            <Link to={"/Single/"+blog.id}><img className="postImg" src={blog.img} alt=" "></img></Link>
<<<<<<< HEAD
            <div className="postInfo">
            
       
=======
           <Link to={"/Edit/"+blog.id}><i className= " singlePostIcon singlePostIcon1 fa-solid fa-pen-to-square"></i></Link> 
            <button onClick={delblog.bind(this,blog.id)}><i className=" singlePostIcon singlePostIcon2 fa-solid fa-trash-can"></i></button>
        <div className="postInfo">
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
            <span className="postTitle">{blog.title}</span>
            
            <span className="postDes"> {blog.content}</span>
            </div>
           <button className="button5"><Link to={"/Edit/"+blog.id}><i className= " singlePostIcon singlePostIcon1 fa-solid fa-pen-to-square"></i></Link></button>
            <button className="button6" onClick={delblog.bind(this,blog.id)}><i className=" singlePostIcon singlePostIcon2 fa-solid fa-trash-can"></i></button>
        
        </div>
                )
            
        
                
        })}
        
        </>
       
        

    )

}

  
