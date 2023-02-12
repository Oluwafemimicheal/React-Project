import React from "react";
import image from '../../assets/image/svg.jpg'
import './banner.css'

 const Banner = ()=>{
    return(
        <section className="banner-con">
            <div className="container">
                <div className="banner">
                    <div className="text">
                        <div>
                        <h1>Femick Graphics<br/> Design</h1>
                        <h4>Creative in all Design and UI & UX</h4>
                        </div>
                        <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum atque perferendis nesciunt beatae eaque nihil? Id, quidem quis officia velit laboriosam, cumque non quae sequi reprehenderit in itaque reiciends sunt!</p>
                        </div>
                        <button className="btn">Learn More!</button>
                    </div>
                    <div className="image">
                        <img src={image} alt=""  style={{width: '100%'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
 }
 export default Banner;