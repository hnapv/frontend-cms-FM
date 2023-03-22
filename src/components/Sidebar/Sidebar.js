import { NavLink } from "react-router-dom"
import "./Sidebar.scss"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoIosPeople } from "react-icons/io"
import { FaFileContract,FaUser } from "react-icons/fa"
import { AiFillHome,AiFillSetting } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="sidebar-container">

      <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <AiFillHome className="sidebar-icon" />Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contract" className="nav-link">
            <FaFileContract className="sidebar-icon" />Contract</NavLink>
        </li>
        <li className="nav-item">

          <NavLink to="/customer" className="nav-link">
            <IoIosPeople className="sidebar-icon" />Customer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user" className="nav-link">
            <FaUser className="sidebar-icon" />User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/system" className="nav-link">
            <AiFillSetting className="sidebar-icon" />System settings</NavLink>
        </li>

      </ul>
      <hr />
      {/* <NavDropdown title="Dropdown" >
    <NavLink to="/customer" className="dropdown-item">Customer</NavLink>
    <NavLink to="/" className="nav-link">Approve customer info</NavLink>

              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}

      {/* </div> */}
    </div>
  )
}
export default Sidebar