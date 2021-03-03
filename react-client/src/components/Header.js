import React from 'react';


export default function Header() {

    return (
        
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={process.env.PUBLIC_URL+"/img/leave01.png"} alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <span className="navbar-item">
                        <a className="button is-white is-outlined" href="/itineraries">
                            <span className="icon">
                                <i className="fa fa-home"></i>
                            </span>
                            <span>Itineraries</span>
                        </a>
                    </span>
                    <span className="navbar-item">
                        <a className="button is-white is-outlined" href="/trips">
                            <span className="icon">
                            <i className="fas fa-map-marked-alt"></i>
                            </span>
                            <span>My trips</span>
                        </a>
                    </span>
                   
                    <span className="navbar-item">
                        <a className="button is-white is-primary" href="/login">
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
