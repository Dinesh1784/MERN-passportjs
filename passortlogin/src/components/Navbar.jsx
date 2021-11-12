import React from "react";
import "../app.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Passportjs Login</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://image.shutterstock.com/image-vector/user-profile-group-outline-icon-600w-598085921.jpg"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Dinesh</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
