import "./write.css"
import {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
export default function Write(){
    const [title, setTitle]=useState("")
    const [content,setContent]=useState("")
    const [img,setImg]=useState("")
    //const [bodyparams,setBodyparams]=useState({"blogid":"","userid":"","title":"","content":"","img":""})
    const [blogid1,setblogid] =useState(2);
    const [userid1,setuserid] =useState(2);
    const redirectToHome = ()=> {
        <Link to="/"></Link>
    }

    const addBlogs = async ()=> {

        setblogid(blogid1+1)
        setuserid(userid1+1)
        

        
        await axios.post("http://[::1]:3000/blog",{
            "blogid":blogid1,
            "userid":userid1,
            "title":title,
            "content":content,
            "img":img
        })
    }



    return(
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
                <button className="writeSubmit" onClick={addBlogs}>Publish</button>
            </form>
        </div>
    )

}
