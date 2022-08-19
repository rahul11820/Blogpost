import "./post.css"
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from "react"
export default function Post(){

    const [blogs, setBlogs]=useState([])
    const [img, setImg]=useState("")
    const [title, setTitle]=useState("")
    const [content,setContent]=useState("")

    const getblogs = async () => {
        const blogdata = await axios.get("http://[::1]:3000/home")
        setBlogs(blogdata.data)

    }

    useEffect(()=>{
        getblogs
    },[])


    return(
        
        blogs.map((blog)=>{
            <div className="post">
            <img className="postImg" src={blog.img} alt=" "></img>
        <div className="postInfo">
            <span className="postTitle">{blog.title}</span>
            <hr/>
            <span class="postDes"> {blog.content}</span>
        </div>
        </div>
        })
        

    )

}