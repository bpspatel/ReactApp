import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <header className="header-section">
                <div className="container-fluid">
                    <div className="inner-header">
                        <div className="logo">
                            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <div className="header-right">
                            <img src="img/icons/search.png" alt="" className="search-trigger" />
                            <img src="img/icons/man.png" alt="" />
                            <a href="#">
                                <img src="img/icons/bag.png" alt="" />
                                <span>2</span>
                            </a>
                        </div>
                        <div className="user-access">
                            <a href="#">Register</a>
                            <a href="#" className="in">Sign in</a>
                        </div>
                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li><a className="active" href="./index.html">Home</a></li>
                                <li><a href="./categories.html">Shop</a>
                                    <ul className="sub-menu">
                                        <li><a href="product-page.html">Product Page</a></li>
                                        <li><a href="shopping-cart.html">Shopping Card</a></li>
                                        <li><a href="check-out.html">Check out</a></li>
                                    </ul>
                                </li>
                                <li><a href="./product-page.html">About</a></li>
                                <li><a href="./check-out.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }

}

export default Navbar;


