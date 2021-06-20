import React, { useState } from "react";
import "./Login.css";
import Signin from './Signin'

function Login() {
  const [sigin, setSignin] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          alt=""
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        />
        <button onClick={() => setSignin(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        {sigin ? (
          <Signin />
        ) : (
          <>
            <h1>Unlimited films,Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch ? Enter Your Email to craete or restart your
              Membership
            </h3>
            <div className="login__input">
              <form>
                <button onClick={() => setSignin(true)} className="getstarted">
                  GET STARTED
                </button>
                <p className="credits">	©Arun Dhas</p>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
