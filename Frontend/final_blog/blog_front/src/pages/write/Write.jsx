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
        navigate("/Profile")

    }



    return(
        <>
        <TopBar />
        <div className="Write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fa-solid fa-circle-plus"></i>
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    <input 
                        type="text"
                        placeholder="img url"
                        value ={img} 
                        onChange={(event)=>{setImg(event.target.value)}}

                    />
                    <input 
                        type="text" 
                        placeholder="Title" 
                        vaule={title}
                        onChange={(event)=>{setTitle(event.target.value)}}
                    />

                        
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Write Description" 
                        vaule={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    />
                </div>
                
            </form>
            <button className="writeSubmit" onClick={addBlogs}>Publish</button>
        </div>
        </>
    )

}
