import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';
import axios from "../../utils/axiosCustomize";
const Login = () => {
  const dispatch = useDispatch()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [username, setUsername] = useState("ADMIN123")
  const [password, setPassword] = useState("123455")
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleLogin = async (event) => {
    console.log(username, password)
    const doLogin = await axios.post(
      "api/user/loginUser",
      { username, password },
      //thêm thuộc tính này để lưu được cookie khi gọi API
      { withCredentials: true } 
    )
    dispatch(loginSuccess(doLogin))
    console.log("doLogin", doLogin)
  }


  return (
    <div className='container'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          variant="primary"
          // type="submit"
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;