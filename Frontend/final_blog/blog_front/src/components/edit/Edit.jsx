<<<<<<< HEAD
import "./edit.css"
=======

>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
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
<<<<<<< HEAD
        <div className="maincontainer">
            <form className="formcontainer7">
                <div className="formcontainer8">
                    <label htmlFor="fileInput">
                        
=======
        <div className="Write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fa-solid fa-circle-plus"></i>
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
                    </label>
                    {/* <input type="file" id="fileInput" ></input> */}
                    

                        
<<<<<<< HEAD
                
                <div >
                    <textarea className="text7"
=======
                </div>
                <div className="writeFormGroup">
                    <textarea
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56
                        placeholder="Write Description" 
                        vaule={content}
                        onChange={(event)=>{setContent(event.target.value)}}
                    />
                </div>
<<<<<<< HEAD
                </div>
            </form>
            <button className="button7" onClick={addBlogs}>Publish</button>
=======
            </form>
            <button className="writeSubmit" onClick={addBlogs}>Publish</button>
>>>>>>> 1ed81a4e1c435a7b4f5ba11cd272b1f82d3b9b56

            
        </div>
        </>
    )

}
