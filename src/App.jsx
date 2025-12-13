import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PNF from "./pages/PNF";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Turf from "./pages/Turf";
import Editprofile from "./pages/Editprofile";
import AdminUi from "./pages/Admin/AdminUi";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile/>}/>
        <Route path="/turf" element={<Turf/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="adminui" element={<AdminUi/>}/>

        <Route path="*" element={<PNF />} />
      </Routes>
    
    </>
  );
}

export default App;
