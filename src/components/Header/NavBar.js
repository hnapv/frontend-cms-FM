import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const account = useSelector(state => state.auth.account)

    const handleCheckAuthenticated = () => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/" className="navbar-brand">ANHVP-INVEST</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/customer" className='nav-link'>Customer</NavLink>
                            <NavLink to={isAuthenticated?"/user":"/login"} className='nav-link' onClick={() => handleCheckAuthenticated()}>User</NavLink>
                            <NavLink to={isAuthenticated?"/contract":"/login"} className='nav-link' onClick={() => handleCheckAuthenticated()}>Contract</NavLink>
                        </Nav>
                        <Nav>
                            {isAuthenticated ?
                                <>
                                    <span className='nav-link'>Hi, {account.fullname}</span>
                                    <NavLink to="/logout" className='nav-link'>Logout</NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/login" className='nav-link'>Login</NavLink>
                                    <NavLink to="/register" className='nav-link'>Register</NavLink>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar