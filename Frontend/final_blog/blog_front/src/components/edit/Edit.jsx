import "./edit.css"
import {useState} from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate, Navigate } from "react-router-dom"
import TopBar from '../topbar/TopBar'
export default function Edit(){
    const [title, setTitle]=useState("")
    const [content,setContent]=useState("")
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



    return(
        <>
        <TopBar />
        <div className="maincontainer">
            <form className="formcontainer7">
                <div className="formcontainer8">
                    <label htmlFor="fileInput">
                        
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    

                        
                
                <div >
                    <textarea className="text7"
                        placeholder="Write Description" 
                        vaule={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    />
                </div>
                </div>
            </form>
            <button className="button7" onClick={addBlogs}>Publish</button>

            
        </div>
        </>
    )

}
