import { Nav, Navbar, Form, Container, Button} from "react-bootstrap";
import {SiPlaystation5} from 'react-icons/si'

const MyNavbar = ( {setValue, value}) => {
   
   const handleOnChange = (e) =>{
      const value = e.target.value;
      setValue(value)
   }

    return(
        <>
          <Navbar bg="light" variant="light" expand="sm" className="shadow-lg p-0">
            <Container>
              <Navbar.Brand href="#home" className="p-0">
                <SiPlaystation5 className="text-dark size " />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav className="ms-auto align-items-center ">
                  <Form.Control type="search"  value={value} onChange={(e)=>handleOnChange(e)} placeholder="Find your game" className="rounded me-sm-2"/>
                  <Button variant="dark" type="button" className="opacity-75 btn-width" >
                    <h5 className="mb-0">Search</h5>
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default MyNavbar;