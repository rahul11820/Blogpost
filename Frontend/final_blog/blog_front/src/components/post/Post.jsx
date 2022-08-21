import "./post.css"
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
export default function Post(){

    const [blogs, setBlogs]=useState([])
    // const [img, setImg]=useState("")
    // const [title, setTitle]=useState("")
    // const [content,setContent]=useState("")

    const getblogs = async () => {
        const blogdata = await axios.get("http://[::1]:3000/home")
        setBlogs(blogdata.data)
        //console.log(blogdata.data)

    }

    useEffect(()=>{
        getblogs();
    },[])


    return(
        
        
             blogs.map((blog)=>{
                return(
                    <div className="post">
            <Link to={"/Single/"+blog.id}><img className="postImg1" src={blog.img} alt=" "></img></Link>
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