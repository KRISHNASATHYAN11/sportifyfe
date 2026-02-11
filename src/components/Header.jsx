import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import sportify_logo from "../assets/sportify_logo.png";
import { Avatar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    let tkn = localStorage.getItem("token");
    if (tkn) {
      setToken(tkn);
    }
    // if token value change, call this function
  }, [token]);

  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container fluid>
          <Navbar.Brand>
            <img
              style={{ width: "90px" }}
              className=" mx-5"
              src={sportify_logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto  my-lg-0  " navbarScroll>
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

            <div className="text-white  me-4 flex items-center bg-black ">
              <FaFacebookF className="mx-2 " />
              <FiInstagram className="mx-2" />
              <BsTwitterX className="mx-2" />
            </div>

            <div>
              {token ? (
                <Dropdown
                  className="bg-black"
                  label={
                    <div className="flex">
                      <Link to={"/profile"}>
                        <FontAwesomeIcon style={{color:"white",padding:"10px",borderRadius:"50%",backgroundColor:"green"}} icon={faUser}/>
                      </Link>
                    </div>
                  }
                  dismissOnClick={false}
                >
                  <div className="bg-black">
                    <DropdownItem>
                      <Link className="text-decoration-none text-white ">
                        Profile
                        <FontAwesomeIcon icon={faUserEdit} />
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-white">
                      <Link className="text-decoration-none text-white">
                        LogOut <FontAwesomeIcon icon={faSignOut} />
                      </Link>
                    </DropdownItem>
                  </div>
                </Dropdown>
              ) : (
                <Link className="text-white text-decoration-none" to={"/login"}>
                  <button className=" bg-linear-to-r from-lime-200 via-lime-400 to-lime-500  border-transparent px-4 py-2 mx-5 rounded-pill d-none d-lg-flex ">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
