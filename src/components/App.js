import react, {useContext, useState} from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar, Form} from "react-bootstrap";
import { Container, Button} from "react-bootstrap";
import {SiPlaystation5} from 'react-icons/si'

const App = () => {



  return(
    <>
      <Navbar bg="light" variant="dark" expand="lg" className="shadow-lg p-0">
        <Container>
          <Navbar.Brand href="#home" className="p-0">
            <SiPlaystation5 className="text-dark size "/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ms-auto">
              <Form.Control type="search" placeholder="Find your game" className="rounded"/>
              <Button variant="dark" type="button" className="ms-3 opacity-75 custom">
                <h5 className="mb-0">Search</h5>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

};

export default App;
