import React, { Component } from 'react'
import {link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (<div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div class="container">
                <link class="navbar-brand" to="#">Logo</link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <link class="nav-link" to="/">Home </link>
                        </li>
                        <li class="nav-item">
                            <link class="nav-link" to="/About">About </link>
                        </li>
                        <li class="nav-item">
                            <link class="nav-link" to="/services">services</link>
                        </li>
                        <li class="nav-item">
                            <link class="nav-link" to="/Blogs">Blogs </link>
                        </li>
                        <li class="nav-item">
                            <link class="nav-link" to="/Contact">Contact</link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar