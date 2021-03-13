import React, { Component } from "react";

import '../components/style.css'

import {Card} from '../components/Card'
import {RBooks} from '../data/RecentBooks'

function ncard(val){
  return(
    <Card
    imagesrc={val.imagesrc}
    cname={val.bname}
    />
  )
}

class Books extends React.Component{
  render(){
    return(
      <div className="book">
        
        <div className="content-header">
        
             We Recent added {RBooks.length} Books in our E-Books-store
          </div>
          <div className="content">
            <div className="card-body">
                {RBooks.map(ncard)}
            </div>
          </div>
          
      </div>
    )
  }
}


export default Books;