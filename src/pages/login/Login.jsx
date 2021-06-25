import "./login.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import { loginCall } from "../../apiCalls";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SOCIAL[APP]</h3>
          <span className="loginDesc">
            Connect with your friends and world in one place.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
              required
              ref={password}
              minLength="5"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="25px" />
              ) : (
                "Log In"
              )}
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <button className="registerButton">Create a New Account </button>
          </form>
        </div>
      </div>
    </div>
  );
}
