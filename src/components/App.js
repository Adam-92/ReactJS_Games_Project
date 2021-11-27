import react, {useContext, useState, useRef} from "react";
import {useGlobalContext} from '../context/Context'
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar, Form} from "react-bootstrap";
import { Container, Button} from "react-bootstrap";
import {SiPlaystation5} from 'react-icons/si'

const App = () => {
  /* Use global context */
  const data = useGlobalContext()
  /* Search input ref */
  const input = useRef(null)
  /* Search input value  */
  const  [inputValue, setInputValue] = useState('');
  /* Control the submit after clicked button */
  const  [submit, setSubmit] = useState(false);

  const handleSearch = (e) => {
    setInputValue(input.current.value);
    const item = e.target;
    console.log(item);
  }
  console.log(data);
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
              <Form.Control type="search" ref={input} onChange={(e)=>handleSearch(e)} placeholder="Find your game" className="rounded"/>
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
