import "./write.css"
import {useState} from 'react'
import axios from 'axios'
export default function Write(){
    const [title, setTitle]=useState("")
  const [content,setContent]=useState("")
    return(
        <div className="Write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" id="fileInput" ></input>
                    <input type="text" placeholder="Title" vaule={title}
        onChange={(event)=>{setTitle(event.target.value)}}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write Description" vaule={content}
        onChange={(event)=>{setContent(event.target.value)}}></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )

}
