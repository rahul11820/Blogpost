import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
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

  <Route path="/Single" element={<Single/>} >

</Route>
</Routes>

</BrowserRouter>
    
  );
}

export default App;
