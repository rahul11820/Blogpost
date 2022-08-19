import {useState} from 'react'
import axios from 'axios'
import { useEffect } from "react"
import {
    BrowserRouter ,
    Routes,
 Route,
    Link
    // etc.
  } from "react-router-dom";
export default function Profile(){

    const [blogs, setBlogs]=useState([])
    // const [img, setImg]=useState("")
    // const [title, setTitle]=useState("")
    // const [content,setContent]=useState("")

    const Profile = async () => {
        const blogdata = await axios.get("http://[::1]:3000/user/"+ "user2")
        setBlogs(blogdata.data)
        console.log(blogdata.data)

    }

    useEffect(()=>{
        Profile();
    },[])

    const delblog = async (blogid) => {
        await axios.delete("http://[::1]:3000/blog/"+blogid)
    }

    return(
        
        
             blogs.map((blog)=>{
                return(
                    <div className="post">
    
            <Link to={"/Single/"+blog.blogid}><img className="postImg" src={blog.img} alt=" "></img></Link>
            <i className= " singlePostIcon singlePostIcon1 fa-solid fa-pen-to-square"></i>
            <button onClick={delblog(blog.blogid)}><i className=" singlePostIcon singlePostIcon2 fa-solid fa-trash-can"></i></button>
        <div className="postInfo">
            <span className="postTitle">{blog.title}</span>
            <hr/>
            <span className="postDes"> {blog.content}</span>
        </div>
        </div>
                )
            
        
                
        })
        
       
       
        

    )

}

  
