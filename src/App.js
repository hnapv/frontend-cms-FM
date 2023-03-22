import './App.scss';

import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="app-container">
      <Row>
        <Col><NavBar /></Col>
      </Row>
      <Row className='app-wrapper'>
        <Col className='col-2 side-bar'><Sidebar /></Col>
        <Col><Outlet /></Col>
      </Row>
    </div>
  );
}

export default App;
