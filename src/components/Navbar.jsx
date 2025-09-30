import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className='navbar-logo'>GamesVault</h1>

            <div className='navbar-search'>
                <input
                    type='text'
                    placeholder='Search games...'
                    className='search-input'
                />
            </div>

            <div className='navbar-profile'>
                <img
                    src='/profile-icon.svg'
                    alt='Profile'
                    className='profile-icon'
                />
            </div>
        </nav>
    );
}
