import React, { useState } from 'react';

export default function UserLogin() {

    return (
        <>

            <div className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title has-text-centered is-size-2">Login</h1>
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="notification is-light">
                                    <p className="subtitle has-text-black">Login to access your trip from any device</p>
                                    <div className="field">
                                        <label className="label has-text-left">Name</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="email" placeholder="Email" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">Password</label>
                                            <p className="control has-icons-left">
                                                <input className="input" type="password" placeholder="Password" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                            </p>
                                    </div>
                                     <a className="button is-primary is-rounded is-outlined is-medium" href="/">Login</a>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
        </>
    )
}