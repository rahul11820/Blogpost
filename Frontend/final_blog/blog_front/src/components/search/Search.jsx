import TopBar from "../topbar/TopBar"
import axios from "axios"
import "./search.css"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function Search()
{
    const [blogs,setBlogs] = useState([])

    let {title} =useParams()

    const searchblogs = async () => {
        const blogdata= await axios.get("http://[::1]:3000/search?title="+title)
        setBlogs(blogdata.data)
        console.log(blogdata)

    }

    useEffect(()=>{
        searchblogs();
    },[title])    
    
    return(
        
       
            <>
            <TopBar />
            
                {blogs.map((blog)=>{
                    return(
                        <div className="post">
        
                <Link to={"/Single/"+blog.id}><img className="postImg" src={blog.img} alt=" "></img></Link>
            <div className="postInfo">
                <span className="postTitle">{blog.title}</span>
                <hr/>
                <span className="postDes"> {blog.content}</span>
            </div>
            </div>
                    )
                })}

</>
            
        
    )


    
}

export default Search