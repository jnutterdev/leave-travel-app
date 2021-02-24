import React from 'react';

export default function Header() {

    return (
        
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="#home">
                    <img src={process.env.PUBLIC_URL+"/img/leave01.png"} alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                    <span>Favorites</span>
                    <span>Trips</span>
                    <span>Login</span>
                </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <span className="navbar-item">
                        <a className="button is-white is-outlined" href="#home">
                            <span className="icon">
                                <i className="fa fa-home"></i>
                            </span>
                            <span>Favorites</span>
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="button is-white is-outlined" href="#home">
                            <span className="icon">
                            <i className="fas fa-map-marked-alt"></i>
                            </span>
                            <span>Trips</span>
                        </a>
                    </span>
                   
                    <span className="navbar-item">
                        <a className="button is-white is-primary" href="#login">
                            <span className="icon">
                            <i className="fas fa-user-plus"></i>
                            </span>
                            <span>Login</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </nav>

    )
}