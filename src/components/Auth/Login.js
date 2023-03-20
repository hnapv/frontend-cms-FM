import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import { apiLoginUser } from '../../services/authService';
import "./Login.scss"
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [username, setUsername] = useState("ADMIN123")
  const [password, setPassword] = useState("123455")
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleLogin = async (event) => {
    console.log(username, password)
    const doLogin = await apiLoginUser(username, password)
    console.log("doLogin", doLogin)
    if (doLogin && doLogin.EC === 0) {
      dispatch(loginSuccess(doLogin))
      navigate("/")
      toast.success(doLogin.EM)

    }
    if (doLogin && doLogin.EC !== 0) {
      toast.error(doLogin.EM)
    }
  }


  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <Form className='login-form' >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h2 className='text-center'>Login</h2>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(a) => setUsername(a.target.value)}
            />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(a) => setPassword(a.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Show password"
              onClick={() => handleShowPassword()}
            />
          </Form.Group>
          <Button
            className='btn-submit'
            variant="primary"
            // type="submit"
            onClick={() => handleLogin()}
          >
            LOGIN
          </Button>
          <div><br /><button onClick={() => navigate("/")}>Back to homepage</button></div>
        </Form>
      </div>

    </div>
  );
}

export default Login;