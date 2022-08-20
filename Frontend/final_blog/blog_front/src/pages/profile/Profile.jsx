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
           <Link to={"/Edit/"+blog.id}><i className= " singlePostIcon singlePostIcon1 fa-solid fa-pen-to-square"></i></Link> 
            <button onClick={delblog.bind(this,blog.id)}><i className=" singlePostIcon singlePostIcon2 fa-solid fa-trash-can"></i></button>
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

  
