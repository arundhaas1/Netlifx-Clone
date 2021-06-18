import React,{useEffect, useState} from "react";
import "./Nav.css";

function Nav() {
const[show,handleShow]=useState(false)

    const transition =()=>{
        if (window.scrollY>100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transition)
        return()=>window.removeEventListener("scroll",transition)
    },[])

  return (
      <div className={`navigation ${show && "nav__color"}`}>
        <div className="nav__content">
          <img
            className="nav__logo"
            alt=""
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          />
          <img
            className="nav__avatar"
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
        </div>
      </div>
  );
}

export default Nav;
