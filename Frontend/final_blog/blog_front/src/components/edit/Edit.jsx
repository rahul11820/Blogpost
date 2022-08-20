
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
        <div className="Write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fa-solid fa-circle-plus"></i>
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    

                        
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
