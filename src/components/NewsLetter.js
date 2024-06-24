import React from "react";
import '../assests/styles/homepage.css'
import { NEWSLETTER_TEXT } from "../config/constants";

export default function NewsLetter() {
    return (
        <div className="newsletter">
            <p>{NEWSLETTER_TEXT}</p>
            <form>
                <input type="email"></input>
                <button>Subscribe</button>
            </form>
        </div>
    );
}