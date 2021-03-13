import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

class nav extends React.Component{
  render(){
    return(
      <div>
          
      

          <ul className="nav">
            <div className="nav-brand">
            PkStore
            </div>
            <li className="nav-item">
                  <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
            </li>
            {/* <li className="aboutus">
                  <NavLink exact activeClassName="active-link" to="/about">About</NavLink>
            </li> */}
            <li>
                  <NavLink exact activeClassName="active-link" to="/books-categories">All Categories</NavLink>
            </li>
            <li>
                  <NavLink exact activeClassName="active-link" to="/recent-books">Recent books</NavLink>
            </li>
            <li>
              <div className="search-box">
              <input type="text" placeholder="Search books"/>
              <button className="btn-search">
                Search
              </button>
              </div>
            </li>
          </ul>
      </div>
    )
  }
}


export default nav;