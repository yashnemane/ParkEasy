import React from "react";
import rentadphoto from '../assests/images/rentadtextphoto.jpg'

export default function RentToUs() {
    return (
        <div className="renttous">
            <div className="rentadtext">
                <h1>Utilize Your Existing Space: Rent it to Us and Maximize Your Earnings</h1>
                <p>Transform your underutilized space into a lucrative asset by partnering with us for rental opportunities. Enjoy the convenience of a seamless process, dependable tenants, and steady income generation. Elevate the value of your property effortlessly and capitalize on its potential starting now.</p>
            </div>
            <div className="rentadphoto">
                <img src={rentadphoto} alt="Free space"/>
            </div>
        </div>
    );
}