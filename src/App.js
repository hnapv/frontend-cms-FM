import logo from './logo.svg';
import './App.scss';


import { Link, NavLink, Outlet } from 'react-router-dom';
import NavBar from './components/Header/NavBar';

function App() {
  return (
    <div className="App">
      <header className="app-container">
        <NavBar />
        <div><Outlet /></div>
      </header>
    </div>
  );
}

export default App;
