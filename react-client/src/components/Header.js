import React from 'react';


export default function Header() {

    return (
        
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma logo" />
                </a>

                <a href="#Section" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href="#Section" className="navbar-item">
                        Home
                    </a>

            <a href="#Section" className="navbar-item">
                 Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
                <a href="#Section" className="navbar-link">
                     More
                </a>

            <div className="navbar-dropdown">
                <a href="#Section" className="navbar-item">
                    About
                </a>
                <a href="#Section" className="navbar-item">
                    Jobs
                </a>
                <a href="#Section" className="navbar-item">
                    Contact
                </a>
                <hr className="navbar-divider" />
                <a href="#Section" className="navbar-item">
                    Report an issue
                </a>
            </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="#Section" className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="#Section" className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}
