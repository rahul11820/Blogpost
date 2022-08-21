import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import Search from "./components/search/Search";
import Profile from "./pages/profile/Profile";
import Signup from "./components/Signup/Signup";
import Signin from "./components/signin/Signin";
import Edit from "./components/edit/Edit";
import False from "./pages/false/False";
import Sucess from "./pages/sucess/Sucess";
import Again from "./pages/again/Again";
import Logout from "./pages/logout/Logout";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
  // etc.
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
function App() {

  const id = window.localStorage.getItem('id')

  const showpage = ()=>{
    if(id==='0')
    {
      return <Signin />
    }
    else
    {
      return <Home />
    }
  }
  return (
    
    <BrowserRouter>
    

<Routes>
  <Route path="/" element={<Signin/>}> 

   </Route>
   <Route path="/home" element={<Home />}> 

   </Route>
   <Route path="/Signin" element={<Signin />}> 

   </Route>

  <Route path="/Write" element={<Write />} >

  </Route>
  <Route path="/Signup" element={<Signup />} >

  </Route>
  <Route path="/False" element={<False />} >

  </Route>
  <Route path="/Sucess" element={<Sucess />} >

  </Route>
  <Route path="/Again" element={<Again />} >

  </Route>
  <Route path="/Logout" element={<Logout />} >

  </Route>

  <Route path="/Single/:id" element={<Single/>} >

</Route>
<Route path="/Edit/:id" element={<Edit/>} >

</Route>
<Route path="/Search/:title" element={<Search/>} >

</Route>
<Route path="/Profile/" element={<Profile/>} >

</Route>
</Routes>

</BrowserRouter>
    
  );
}

export default App;
