import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import Login from './components/Auth/Login';
import { Provider } from 'react-redux';
import  { persistor, store } from './redux/store';
import Customers from './components/Customers/Customers';
import Users from './components/Users/Users';
import Contracts from './components/Contracts/Contracts';
import Register from './components/Auth/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate loading={null} persistor={persistor}>
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
    </BrowserRouter>
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
