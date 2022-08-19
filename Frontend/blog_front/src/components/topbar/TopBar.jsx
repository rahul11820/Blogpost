import "./topbar.css"
export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><a class="nav-link" href="http://localhost:3000/">Home</a></li>
                    
                    <li className="topListItem"><a class="nav-link" href="/Write">Write</a></li>
                    <li className="topListItem"><a class="nav-link" href="/Single">SignIn</a></li>
                    <li className="topListItem">Register</li>
                    <li className="topListItem">Logout</li>
                </ul>
                
            </div>
            <div className="topRight">
                <img className="topImg" src=" https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg" alt=" "></img>
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

