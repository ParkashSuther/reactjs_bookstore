import React, { Component } from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
import {RBooks} from '../data/RecentBooks'

function itemList(val){
  return(
    <li key={val.id}>
      <Link to={val.path}>{val.bname}</Link>
    </li>
  )
}

class Sidebar extends React.Component{
  render(){
    return(
      <div className="side">
        <span>Recent Added</span> 
        <ul className="ul">
          
          {RBooks.map(itemList)}
        </ul>

      </div>
    )
  }
}


export default Sidebar;