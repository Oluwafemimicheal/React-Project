import React from "react";
import './Layout.css'

const Layout = () =>{
    return(
        <section className="container">
            <div className="layout_container">
                <article>
                    <h1>This is the Header part for you</h1>
                    <h3>what you think about the business?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, facere! Numquam, enim eveniet amet omnis explicabo voluptates atque. Labore explicabo aspernatur consequuntur corrupti. Rem, laudantium impedit ullam cupiditate distinctio labore!</p>
                    <button>Click Here!</button>
                </article>
                <picture>
                    <span>Image Text</span>
                    <img src="" alt="" />
                </picture>
            </div>
        </section>
    )
}
export default Layout;