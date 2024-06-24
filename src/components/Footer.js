import React from "react";
import ALICEBLUE_LOGO from '../assests/images/parkeasylogoaliceblue.jpg'
import {COMPANY_REGISTERED_EMAIL, COMPANY_REGISTERED_NAME} from '../config/constants'
import {COMPANY_REGISTERED_ADDRESS} from  '../config/constants'
import {COMPANY_REGISTERED_PHONE} from '../config/constants'
import '../assests/styles/homepage.css'

/*export default function Footer() {
    return (
        <div className="footer">
            <div className="company-details">
                <img src={ALICEBLUE_LOGO} alt="company-logo"/>
                <h1>{COMPANY_REGISTERED_NAME}</h1>
                <p>Address - {COMPANY_REGISTERED_ADDRESS}</p>
                <p>Address - {COMPANY_REGISTERED_ADDRESS}</p>
                <p>Phone No. - {COMPANY_REGISTERED_PHONE}</p>
            </div>
            <div className="follow-pages">
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Reddit</li>
                    <li>Pinterest</li>
                </ul>
            </div>
        </div>
    );
}*/

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src={ALICEBLUE_LOGO} alt="Parkeasy Logo" className="logo" />
                </div>
                <div className="footer-section">
                    <h4>FOR CUSTOMERS</h4>
                    <ul>
                        <li><a href="#myaccount">My account</a></li>
                        <li><a href="#trackorder">Track Order</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#cart">Cart</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#privacypolicy">Privacy Policy</a></li>
                        <li><a href="#termsncondition">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#orders">Orders</a></li>
                        <li><a href="#address">Addresses</a></li>
                        <li><a href="#accountdetails">Account details</a></li>
                        <li><a href="#lostpasssword">Lost password</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p><strong>{COMPANY_REGISTERED_NAME}</strong></p>
                    <p><strong>Address: </strong>{COMPANY_REGISTERED_ADDRESS}</p>
                    <p><strong>Email: </strong> {COMPANY_REGISTERED_EMAIL}</p>
                    <p><strong>WhatsApp: </strong> {COMPANY_REGISTERED_PHONE}</p>
                </div>
            </div>
        </footer>
    );
}
