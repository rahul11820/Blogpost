
import "./edit.css"
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate, Navigate } from "react-router-dom"
import TopBar from '../topbar/TopBar'
export default function Edit(){
    const [title, setTitle]=useState("")
    const [content,setContent]=useState("")
    const [recontent,setRecontent]=useState("")
    const [img,setImg]=useState("")
    //const [bodyparams,setBodyparams]=useState({"blogid":"","userid":"","title":"","content":"","img":""})
    const navigate=useNavigate()

    
    const redirectToHome = ()=> {
        <Link to="/"></Link>
    }
    const {id}=useParams()

    const addBlogs = async ()=> {

        
        
        
        const a=await axios.put("http://[::1]:3000/blog/"+id,{
            
            "content":content
            
        });
        navigate("/Profile")
    }
    
    const fun= async() => {
      const  a= await axios.get("http://[::1]:3000/blogs/"+id)
        console.log(a.data[0].content)
        // setContent(a.data[0].content)

    }

    // useEffect(() => {
    //   const  a= axios.get("http://[::1]:3000/blogs/"+id)
    //     console.log(a.data[0].content)
    //     // setContent(a.data[0].content)

    // },[])


    return(
        <>
        <TopBar />
        <div className="maincontainer1">
            <form className="formcontainer7">
                <div className="formcontainer8">
                    <label htmlFor="fileInput">
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    
                
                <div >
                    <textarea className="text7"
                        placeholder="Write Description" 
                        value={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    />
                </div>
                </div>
            </form>
            <button className="button7" onClick={addBlogs}>Edit</button>

            
        </div>
        </>
    )

}
