import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Qwick</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>james</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
