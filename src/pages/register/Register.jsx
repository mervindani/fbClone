import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../components/context/AuthContext";
import "./register.css";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const history = useHistory();
  const confirmPassword = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      password.current.setCustomValidity("password's dont match");
    } else {
      const userCredentials = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const response = await fetch("/auth/register", {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const data = await response.json();
        console.log(data);
        console.log(response);
        try {
          loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
          );
          history.push("/");
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <h3 className="registerLogo">SOCIAL[APP]</h3>
          <span className="registerDesc">
            Connect with your friends and world in one place.
          </span>
        </div>
        <div className="registerLeft">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              type="text"
              className="registerInput"
              ref={username}
              required
            />
            <input
              placeholder="email"
              type="email"
              className="registerInput"
              ref={email}
              required
            />
            <input
              placeholder="password"
              type="password"
              className="registerInput"
              ref={password}
              required
              minLength="6"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
              ref={confirmPassword}
              required
              minLength="6"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            {/* <span className="registerForgot">Forgot Password?</span> */}
            {/* <button className="registerButton">Create a New Account </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
