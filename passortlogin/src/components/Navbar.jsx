import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Passportjs Login
        </Link>
      </span>
      {user ? (
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
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
