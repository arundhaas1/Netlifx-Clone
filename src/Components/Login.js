import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          alt=""
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        />
        <button className="login__button">Sign In</button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        <>
          <h1>Unlimited films,Tv programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>
            Ready to watch ? Enter Your Email to craete or restart your
            Membership
          </h3>
          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button className="getstarted">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
