import {Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

function TopBar() {
  let navigate = useNavigate()
  let role = sessionStorage.getItem("role")
  let logout = useLogout()
  return <>
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="/">Service-desk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/admin/dashboard")}>Dashboard</Nav.Link>
            {
              role = "superadmin" ? <Nav.Link onClick={() => navigate("/admin/users")}>Users</Nav.Link> : <></>
            }
          </Nav>
        </Navbar.Collapse>
      </Container> 
        <Button onClick={()=>logout()} style={{marginRight:"10px"}} variant='danger'>Logout</Button>
   
    </Navbar>
  </>
}

export default TopBar