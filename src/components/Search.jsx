import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user "/>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
            <span>james</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
