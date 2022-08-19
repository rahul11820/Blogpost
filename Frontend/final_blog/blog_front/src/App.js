import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import Search from "./components/search/Search";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
  // etc.
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
function App() {
  return (
    
    <BrowserRouter>
    <TopBar />

<Routes>

  <Route path="/" element={<Home />}> 

   </Route>

  <Route path="/Write" element={<Write />} >

  </Route>

  <Route path="/Single/:id" element={<Single/>} >

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
