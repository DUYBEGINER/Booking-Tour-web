import React from 'react';
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Searchbar from './searchbar';
function Header(props) {
    return (
        <div className='header'>
            <Navbar/>
            <div className="footer-content">
                <h1>We Find The Best Tours For You</h1>
                <p>Discover your next adventure with ease – book unforgettable tours and travel experiences tailored just for you!</p>
                <div className="videoArea">
                    <div className="circle-button">
                        <a href='https://www.facebook.com/'>
                            <div className="play-icon"></div>
                        </a>              
                    </div>
                    <p>Watch video</p>
                    
                </div>
            </div>
            <Searchbar/>
        </div>
    );
}

export default Header;