import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img className="logo" src="https://i.pinimg.com/736x/d7/ac/29/d7ac29f0601540077080dd19b3119b6b.jpg"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/shop">Books</Link>
                        </li>    
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/add">Add Books</Link>
                        </li>                      
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;