import React, { Component } from "react";
import '../components/style.css'
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

import BooksCounter from '../components/BooksCounter'


import {Card} from '../components/Card'
import {categories,Featured} from '../data/Categories'

function ncard(val){
  return(
    <Card
    imagesrc={val.imagesrc}
    cname={val.cname}
    />
  )
}

class Home extends React.Component{

  render(){
    return(
      <div className="main-home">
        <div >
            <img className="theme-img" src="https://inspiria.edu.in/wp-content/uploads/2015/01/Well-stocked-library-at-Inspiria-Knowledge-Campus-HD.jpg" />
        </div>
        <div className="featured-items">

        <div className="content-header">
          <svg width="1.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-align-end" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
            <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/>
          </svg>
            <h3>Pakistan's Largest Online Books Marketplace!</h3>
          </div>
            <div className="">
            <div className="content-header">
              Featured Categories section
            </div>  
              <div className="content">
                    <div className="card-body">
                        {categories.map(ncard)}
                    </div>
              </div>

              
              <br/>
              <div className="content-header">
              Get Our Recent Added Books In Our Library
            </div>  
                <div className="content">
                    <div className="card-body">
                        {categories.map(ncard)}
                    </div>
              </div>

              <br/>
              <div className="content-header">
              Get Our Featured Books In Our Library
            </div>  
                <div className="content">
                    <div className="card-body">
                        {categories.map(ncard)}
                    </div>
              </div>
              
              <div className="content-header">
              <h3>Get Top Discounted E-Books Now</h3>
              Get Our Featured Books In Our Library
            </div>
              <div className="content">
                    <div className="card-body">
                        {categories.map(ncard)}
                    </div>
              </div>
            </div>
        </div>

        
      </div>
    )
  }
}


export default Home;