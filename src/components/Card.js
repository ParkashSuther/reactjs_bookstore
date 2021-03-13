
import React from 'react'


function Card(props){
    return(
        <a>
        <div className="cards">
            <div className="card">
                <img className="ii" src={props.imagesrc} alt="Card-image"/>
                <div className="card-info">
                    <h3 className="card-title">{props.cname}</h3>
                    
                </div>
            </div>
        </div>
        </a>
    )
}

export {Card};