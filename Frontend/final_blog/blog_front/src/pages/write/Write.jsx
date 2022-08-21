import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom"
import TopBar from "../../components/topbar/TopBar"

export default function Write(){
    const [title, setTitle]=useState("")
    const [content,setContent]=useState("")
    const [img,setImg]=useState("")
    //const [bodyparams,setBodyparams]=useState({"blogid":"","userid":"","title":"","content":"","img":""})
    
    const redirectToHome = ()=> {
        <Link to="/"></Link>
    }

    const navigate =useNavigate()
    const userid=window.localStorage.getItem('id')

    const addBlogs = async ()=> {

        
        

        
        await axios.post("http://[::1]:3000/blog",{
            "userid":userid,
            "title":title,
            "content":content,
            "img":img
        })

        navigate("/Home")

        navigate("/Profile")


    }



    return(
        <>
        <TopBar />
        <div className="maincontainer1">
            <form className="formcontainer3">
                <div className="formcontainer4">
                <div>
                    <label htmlFor="fileInput">ImgUrl
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    <input className="text4"
                        type="text"
                        placeholder="img url"
                        value ={img} 
                        onChange={(event)=>{setImg(event.target.value)}}

                    />
                    </div>
                    <div>
                    <label>Title</label>
                    <input className="text5"
                        type="text" 
                        placeholder="Title" 
                        vaule={title}
                        onChange={(event)=>{setTitle(event.target.value)}}
                    />
                    
                        
                </div>
                <div>
                <label>Content</label>
                    <textarea className="text6"
                        placeholder="Write Description" 
                        vaule={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    />
                </div>
                </div>
                
                </form>
            <button className="button1" onClick={addBlogs}>Publish</button>
            
           


        </div>
        </>
    )

}