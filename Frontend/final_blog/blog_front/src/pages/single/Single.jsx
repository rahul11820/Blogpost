import { useParams } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import TopBar from "../../components/topbar/TopBar"
import "./single.css"

export default function Single(){
    
    return(
        <>
        <TopBar />
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
        </>
    )

}