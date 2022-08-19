import "./singlePost.css"

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://i.pinimg.com/originals/7b/db/75/7bdb758f3927bc393ff2b2b72d4f4f6d.jpg" alt= ""></img>
            <h1 className="singlePostTitle">
                Nature love
            <div className="singlePostEdit">
                <i className= " singlePostIcon singlePostIcon1 fa-solid fa-pen-to-square"></i>
                <i className=" singlePostIcon singlePostIcon2 fa-solid fa-trash-can"></i>
            </div>
            <div className="singlePostInfo">
                <p className="singlePostDes">Nature refers to the phenomena of the physical world, and also to life in general. It ranges in scale from the subatomic to the cosmic. The term "nature" may refer to living plants and animals, geological processes, weather, and physics, such as matter and energy.
                </p>
            </div>
            </h1>
            </div>
        </div>
    )
   
    

}