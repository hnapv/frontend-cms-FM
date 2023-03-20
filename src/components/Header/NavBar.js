import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { apiLogoutUser } from '../../services/authService';
import { toast } from 'react-toastify';
import { logoutSuccess } from '../../redux/slices/authSlice';
import { FiSearch } from "react-icons/fi"


const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const account = useSelector(state => state.auth.account)

    const handleCheckAuthenticated = () => {
        if (!isAuthenticated) {
            navigate("/login")
        }
    }

    const handleLogout = async () => {
        const data = await apiLogoutUser()
        dispatch(logoutSuccess())
        toast.success(data)
        console.log("data=>>", data)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                {/* <Container> */}
                {/* <NavLink to="/" className="navbar-brand">ANHVP-INVEST</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <FiSearch className='search-icon'/>
                        <input className='form-control' placeholder='Search' />
                        {/* <NavLink to={isAuthenticated?"/user":"/login"} className='nav-link' onClick={() => handleCheckAuthenticated()}>User</NavLink>
                            <NavLink to={isAuthenticated?"/contract":"/login"} className='nav-link' onClick={() => handleCheckAuthenticated()}>Contract</NavLink> */}
                    </Nav>
                    <Nav>
                        {isAuthenticated ?
                            <>
                                <span className='nav-link'>Hi, {account.fullname}</span>
                                <span className='nav-link' style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Logout</span>
                            </>
                            :
                            <>
                                <NavLink to="/login" className='nav-link'>Login</NavLink>
                                <NavLink to="/register" className='nav-link'>Register</NavLink>
                            </>
                        }

                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </>
    )
}

export default NavBar