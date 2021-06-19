import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../Firebase";
import "./Signin.css";

function Signin() {

    const history=useHistory();

    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

        const register=(e)=>{
            e.preventDefault();

            auth.createUserWithEmailAndPassword(email,pass)
            .then((auth)=>{
                if(auth){
                    history.push("/home")
                }
            })
            .catch(e=>alert(e.message))
            
        }

        const signin =(e)=>{
            e.preventDefault();

            auth.signInWithEmailAndPassword(email,pass)
            .then((auth)=>{
                    history.push("/home")
            })
            .catch(e=>alert(e.message))
        }

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password"  onChange={(e)=>setPass(e.target.value)}/>
        <button type="submit" onClick={signin}>Sign In</button>
        <h4>
          <span className="new">New to Netflix?</span>{" "}
          <span className="now" onClick={register}>Signup Now</span>
        </h4>
      </form>
    </div>
  );
}

export default Signin;
