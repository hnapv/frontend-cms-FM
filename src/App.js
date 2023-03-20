import logo from './logo.svg';
import './App.scss';

import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar from './components/Header/NavBar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
          <Sidebar/>
          <div className='app-wrapper'>
        <NavBar />
        <div><Outlet /></div>
          </div>
    </div>
  );
}

export default App;
