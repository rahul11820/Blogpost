import Header from "../../components/header/Header"
import Post from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import TopBar from "../../components/topbar/TopBar"
import "./home.css"
export default function Home(){
    return(
        <>
            <TopBar />
            <Header />
            
            <div className="home">
                <Post />
                <Sidebar />
            
            </div>
        </>
    )

}