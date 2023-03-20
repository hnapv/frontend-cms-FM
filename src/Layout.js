import App from './App';
import { ToastContainer } from 'react-toastify';
import Login from './components/Auth/Login';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';
import Contracts from './components/Contracts/Contracts';
import Register from './components/Auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Layout = () => {
    return (
        <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} >
                            <Route path="user" element={<Users />} />
                            <Route path="customer" element={<Customers />} />
                            <Route path="contract" element={<Contracts />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </BrowserRouter>

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