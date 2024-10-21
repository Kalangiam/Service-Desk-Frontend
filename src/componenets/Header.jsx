import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'

function Header() {
    let navigate = useNavigate()
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Service-desk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />your
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/create")}>Create Request</Nav.Link>
                        <Nav.Link onClick={() => navigate("/status")}>Check Status</Nav.Link>
                        <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Header