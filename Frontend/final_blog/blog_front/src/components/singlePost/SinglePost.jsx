import "./singlePost.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
export default function SinglePost(){
    const [blog, setBlog]=useState("")

    let {id}=useParams()

    const getBlogs = async  () =>{
        const url="http://[::1]:3000/blogs/"+id
       const blogdata = await axios.get(url)
       setBlog((blogdata.data)[0])
       //console.log((blogdata.data)[0])

    }
    useEffect(()=>{
        getBlogs();
    },[])
   

    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                {/* {console.log(blog.img)} */}
            <img className="singlePostImg" src={blog.img} alt= ""></img>
            <h1 className="singlePostTitle">
                {blog.title}
            
            <div className="singlePostInfo">
                <p className="singlePostDes">{blog.content}
                </p>
            </div>
            </h1>
            </div>
            {/* <button onClick={delblog.bind(this,blog.id)}>Delete</button> */}

        </div>
    )
   
    

}