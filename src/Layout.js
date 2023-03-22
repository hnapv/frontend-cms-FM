import App from './App';
import { ToastContainer } from 'react-toastify';
import Login from './components/Auth/Login';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';
import Contracts from './components/Contracts/Contracts';
import Register from './components/Auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

const NotFound = () => {
    return (
        <div className='container mt-3 alert alert-danger'> 404 NOT FOUND</div>
    )
}
const Layout = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<Homepage />} />
                        <Route path="user" element={<Users />} />
                        <Route path="customer" element={<Customers />} />
                        <Route path="contract" element={<Contracts />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
        </>
    )
}

export default Layout