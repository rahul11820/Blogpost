import "./sidebar.css"
export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImg" src="https://cdn.wallpapersafari.com/32/37/EIWeZn.jpg" alt=" "></img>
            <p>"Nature" refers to the phenomena of the physical world, and also to life in general. It ranges in scale from the subatomic to the cosmic. The term "nature" may refer to living plants and animals, geological processes, weather, and physics, such as matter and energy.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Music</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
        </div>
    )

}