import { useState } from "react";
import Layout from "../components/layout";
import "./register.css";
import { onRegistration } from "../api/auth";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const checkValidation = () => {
  //   const regEx = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
  //   if (regEx.test(email)) {
  //     //
  //   } else if (email === "") {
  //     setMessage("Please enter email");
  //   } else if (!regEx.test(email)) {
  //     setMessage("Email is not valid");
  //   } else {
  //     setMessage("");
  //   }
  // };
  const [values, setValues] = useState({
    name: "",
    age: "",
    phone: "",
    position: "",
    username: "",
    gender: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);

      setError("");
      setSuccess(data.message);
      setValues({
        name: "",
        age: "",
        phone: "",
        position: "",
        username: "",
        gender: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };
  const locationChange = () => {
    window.location = "/register";
  };
  return (
    <Layout>
      <div className="register_main">
        <form onSubmit={(e) => onSubmit(e)}>
          <span>
            <h1>Register</h1>
          </span>
          <div className="register_form_content">
            <div className="register_form_content_1">
              <div className="input_field">
                <input
                  type="text"
                  required="required"
                  onChange={(e) => onChange(e)}
                  name="name"
                ></input>
                <span>Fist Name</span>
              </div>
              <div className="input_field">
                <input
                  type="number"
                  required="required"
                  onChange={(e) => onChange(e)}
                  name="age"
                ></input>
                <span>Age</span>
              </div>
              <div className="input_field">
                <input
                  type="number"
                  required="required"
                  onChange={(e) => onChange(e)}
                  name="phone"
                ></input>
                <span>Phone Number</span>
              </div>
              <div className="input_field">
                <input
                  type="text"
                  required="required"
                  onChange={(e) => onChange(e)}
                  name="position"
                ></input>
                <span>Position</span>
              </div>
            </div>
            <div className="register_form_content_2">
              <div className="input_field">
                <input
                  type="text"
                  required="required"
                  name="username"
                  onChange={(e) => onChange(e)}
                ></input>
                <span>Last Name </span>
              </div>

              <div className="input_field_gender">
                <input
                  type="radio"
                  value="gender"
                  name="gender"
                  required="required"
                  onClick={(e) => onChange(e)}
                ></input>
                Male
                <input
                  type="radio"
                  value="gender"
                  name="gender"
                  required="required"
                  onClick={(e) => onChange(e)}
                ></input>
                Female
              </div>

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
          </div>
          <div className="error_message">{error}</div>
          <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
          <button onClick={() => locationChange()}>Sign Up</button>
          {/* <label className="mail_validation">{message}</label> */}
        </form>
      </div>
    </Layout>
  );
};

export default Register;
