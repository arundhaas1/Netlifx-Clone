import React from "react";
import "./Profile.css";
import { useDataLayerValue } from "../DataLayer";
import Nav from "./Nav";
import { auth } from "../Firebase";

function Profile() {
  const [{ user }, dispatch] = useDataLayerValue();

  // console.log('emailis',state.user.email)

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <div className="profile__details">
            <h2>{user?.email}</h2>
            <div className="profile__plans">
              <h3>Plans (Current Plan : Premium)</h3>
              <h5>Reneval Date 04/07/2021</h5>
              <div className="standard">
                <div>
                  <p>Netflix Standard</p>
                  <p>1080p</p>
                </div>
                <div className="sbuts">
                  <button>Subscribe</button>
                </div>
              </div>
              <div className="basic">
                <div>
                  <p>Netflix Basic</p>
                  <p>480p</p>
                </div>
                <div className="bbuts">
                  <button>Subscribe</button>
                </div>
              </div>
              <div className="premium">
                <div>
                <p>Netflix Premium</p>
                  <p>4K+HDR</p>
                </div>
                <div className="pbuts">
                  <button>Current Package</button>
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profile__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
