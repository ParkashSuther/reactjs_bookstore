import React from 'react'
import '../components/style.css'
const footer =()=>{
    return(
        <div className="footer">
            <div className="row">
                <div className="col">
                <span>POPULAR CATEGORIES</span>
                    <ul >
                        <li>Computer Science</li>
                        <li>English Litracture books</li>
                        <li>CSS books</li>
                        <li>Urdu Litracture books</li>
                        
                    </ul>
                </div>
                <div className="col">
                <span> TRENDING SEARCHES</span>

                    <ul >
                        <li>React js</li>
                        <li>Ai</li>
                        <li>Machine learning</li>
                        <li>Computer Science</li>
                        
                    </ul>
                </div>
                <div className="col">
                <span>ABOUT US</span>
                    <ul >
                        <li>About PK Store</li>
                        <li>Our Blogs</li>
                        <li>Contact us</li>
                        <li>PK Store for business</li>
                        
                    </ul>
                </div>

                <div className="col">
                <span>FOLLOW US</span>
                    <ul >
                        <li>Facebokk</li>
                        <li>Twitter</li>
                        <li>Intagram</li>
                        <li>LinkedIn</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default footer;