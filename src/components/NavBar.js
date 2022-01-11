// import logo from './logo.svg';
// import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
    return ( 
        <div className = "App" >

        <Navbar collapseOnSelect expand = "lg"          bg = "dark"
        variant = "dark" >
        <Container>
        <Navbar.Brand href = "#home" > NSP </Navbar.Brand>   
        <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
        <Navbar.Collapse id = "responsive-navbar-nav" >
        <Nav className = "me-auto" >
        <Nav.Link href = "#contacto" > Contacto </Nav.Link>   
        <Nav.Link href = "#nosotros" > Nosotros </Nav.Link>  
        <NavDropdown title = "Categorias" 
         id = "collasible-nav-dropdown" >
        <NavDropdown.Item href = "#action/3.1" > Accesorios </NavDropdown.Item> 
        <NavDropdown.Item href = "#action/3.2" > Sneakers </NavDropdown.Item>   
        <NavDropdown.Item href = "#action/3.3" > Indumentaria </NavDropdown.Item>  
        <NavDropdown.Divider/>
        <NavDropdown.Item href = "#action/3.4" > Ofertas </NavDropdown.Item>
        </NavDropdown>   
        </Nav>   
        <Nav >
        <Nav.Link href = "#login" > Log In </Nav.Link>  
        <Nav.Link href = "#signup"> Sing Up </Nav.Link>  
        </Nav>   
        </Navbar.Collapse>   
        </Container>   
        </Navbar>   
        </div>
    );
}
export default Navbar1;