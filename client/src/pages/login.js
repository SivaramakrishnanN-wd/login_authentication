import Layout from "../components/layout";
import "./login.css";
import { onLogin } from "../api/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlices";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(values);
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };
  // const locationChange = () => {
  //   window.location = "/register";
  // };

  return (
    <Layout>
      <div className="login_main">
        <form onSubmit={(e) => onSubmit(e)}>
          <span>
            <h1>LOGIN</h1>
          </span>
          <div className="input_content">
            <div className="input_field">
              <input
                type="email"
                onChange={(e) => onChange(e)}
                required="required"
                id="email"
                name="email"
                value={values.email}
              ></input>
              <span>E-Mail</span>
            </div>
            <div className="input_field">
              <input
                type="password"
                required="required"
                onChange={(e) => onChange(e)}
                value={values.password}
                id="password"
                name="password"
              ></input>
              <span> Password</span>
            </div>
          </div>
          <div className="error_message">{error}</div>
          <button>Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
