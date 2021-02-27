import React, { useState } from 'react';

export default function UserLogin() {

    return (
        <>

            <div className="hero is-primary bg-login">
                <div className="hero-body">
                    <h1 className="title has-text-centered is-size-2">Login</h1>
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="notification is-light">
                                    <p className="subtitle has-text-black">Login to access your trip from any device</p>
                                    <div className="field">
                                        <label className="label has-text-left">Email</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="email" placeholder="Email" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">First name</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="First name" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">Last name</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="Last name" />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
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