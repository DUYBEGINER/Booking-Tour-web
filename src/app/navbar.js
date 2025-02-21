import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Tour Guide</h1>
            
            <ul className="links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Popular Destination</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
            </ul>

            <div className="auth-buttons">
                <a href="#" className="btn btn--login">Sign in</a>
                <a href="#" className="btn btn--signup">Sign Up</a>
            </div>
        </div>
    );
}

export default Navbar;
