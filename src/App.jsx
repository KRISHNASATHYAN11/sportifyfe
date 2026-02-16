import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import PNF from "./pages/PNF";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Turf from "./pages/Turf";
import Editprofile from "./pages/Editprofile";
import AdminUi from "./pages/Admin/AdminUi";
import Events from "./pages/Events";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "./components/Loader";
import OwnerHome from "./Owner/pages/OwnerHome";
import AddTurf from "./Owner/pages/AddTurf";
import ViewSingle from "./pages/ViewSingle";
import AddEvent from "./Owner/pages/AddEvent";
import SingleEvent from "./pages/SingleEvent";
import BookingSuccess from "./components/BookingSuccess";
import BookingFailure from "./components/BookingFailure";
import Eventbookingfailure from "./components/Eventbookingfailure";
import Eventbookingsuccess from "./components/Eventbookingsuccess";
import Team from "./components/Team";

function App() {

  const [showHome,setShowHome]= useState(false)
  setTimeout(()=>{
    setShowHome(true)
  },1000)

  const [showEvent,setShowEvent]= useState(false)
    setTimeout(()=>{
      setShowEvent(true)
    },1000)
  const [showTurf,setShowTurf]= useState(false)
    setTimeout(()=>{
      setShowTurf(true)
    },1000)
  


  return (
    <>
      <Routes>
        {/* conditional rendering */} 
        <Route path="/" element={showHome?<Home />:<Loader/>} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/turf" element={showTurf?<Turf />:<Loader/>} />
        <Route path="/events" element={showEvent?<Events />:<Loader/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="adminui" element={<AdminUi />} />
        <Route path="/:id/viewsingle" element ={<ViewSingle/>}/>
        <Route path="/:id/singleevent" element ={<SingleEvent/>}/>
        <Route path="/bookingsuccess" element={<BookingSuccess/>}/>
        <Route path="/bookingfailure" element={<BookingFailure/>}/>
        <Route path="/eventbookingfailure" element={<Eventbookingfailure/>}/>
        <Route path="/eventbookingsuccess" element={<Eventbookingsuccess/>}/>
        <Route path="/team" element={<Team/>}/>



        <Route path="/ownerhome" element={<OwnerHome/>}/>
        <Route path="/addTurf" element={<AddTurf/>}/>
        <Route path="/addevent" element={<AddEvent/>}/>

        <Route path="*" element={<PNF />} />
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "white",
            color: "black",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
    </>
  );
}

export default App;
