import "./register.css";

export default function Register() {
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
          <div className="registerBox">
            <input
              placeholder="Username"
              type="text"
              className="registerInput"
            />
            <input placeholder="email" type="email" className="registerInput" />
            <input
              placeholder="password"
              type="password"
              className="registerInput"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            {/* <span className="registerForgot">Forgot Password?</span> */}
            {/* <button className="registerButton">Create a New Account </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
