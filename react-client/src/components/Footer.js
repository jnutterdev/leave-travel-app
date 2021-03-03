import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

    return(
        <footer className="footer">
            <div className="content has-text-centered">
                 <p>
                    &copy; 2021 by <a href="https://github.com/jnutterdev/didactic-guacamole">Tara, Kristin, John</a>. <Link to="/about">Read about the developers.</Link>
                </p>
            </div>
        </footer>
    )
}