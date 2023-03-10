import React from 'react';
import './Platform.css'
import { Cards } from './cards'

const Platform = () => {
    return (
        <section className='platform'>
            <div className="container">
                <h2>The Future of Cyber Security Is Here</h2>
            </div>
            <div className="cards">
                <div className="card-container">
                <Cards 
                text={"Secure Data Collection"}
                paragraph={'Tis is the source of this work where data are been share to every point of network system collected to the source, with this we call get many data from the source as we like and keep them properly fot future propose'}
                icon={'R'}
                />
                <Cards 
                text={"Secure Data Collection"}
                paragraph={'Tis is the source of this work where data are been share to every point of network system collected to the source, with this we call get many data from the source as we like and keep them properly fot future propose'}
                icon={'R'}
                />
                <Cards 
                text={"Secure Data Collection"}
                paragraph={'Tis is the source of this work where data are been share to every point of network system collected to the source, with this we call get many data from the source as we like and keep them properly fot future propose'}
                icon={'R'}
                />
                </div>
            </div>
        </section>
    );
}

export default Platform;
