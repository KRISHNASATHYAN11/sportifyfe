import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sportify_logo from "../assets/sportify_logo.png";
import { Avatar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand>
            <img style={{width:"90px"}} className=" mx-5" src={sportify_logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white",backgroundColor:"white"}} />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto  my-lg-0  "
              
              navbarScroll
            >
              <Nav.Link href="/" className="text-white me-2 ">
                Home
              </Nav.Link>
              <Nav.Link href="/turf" className="text-white mx-3">
                Turf
              </Nav.Link>

              <Nav.Link href="/events" className="text-white mx-3">
                Events
              </Nav.Link>
              <Nav.Link href="/about" className="text-white mx-3">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white mx-3">
                Contact
              </Nav.Link>
            </Nav>

            <div className="d-lg-flex   d-none ">
            <Link to={'/profile'} >  <Avatar  style={{width:"50px",borderRadius:"50%"}}
                img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="avatar of Jese"
                rounded
              /></Link>

              <button className=" bg-linear-to-r from-lime-200 via-lime-400 to-lime-500  border-transparent px-4 py-1 mx-5 rounded-pill d-none d-lg-flex "><span className="font-bold py-2"><Link className="text-white text-decoration-none" to={'/login'}>Login</Link></span></button>


            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
