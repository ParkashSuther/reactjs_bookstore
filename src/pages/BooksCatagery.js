import React, { Component } from "react";

import '../components/style.css'

import {Card} from '../components/Card'
import {categories,computerScience} from '../data/Categories'

function ncard(val){
  return(
    <Card
    imagesrc={val.imagesrc}
    cname={val.cname}
    />
  )
}

class Books extends React.Component{
  render(){
    return(
      <div className="book">
        
        <div className="content-header">
        
              Computer science section
          </div>
          <div className="content">
            <div className="card-body">
                {computerScience.map(ncard)}
            </div>
          </div>
          <div className="content-header">
          
             Litrature section
          </div>
          <div className="content">
            <div className="card-body">
                {categories.map(ncard)}
            </div>
          </div>
      </div>
    )
  }
}


export default Books;