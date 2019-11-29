import React, { Component } from 'react';
import SocailTab from './SocailTab';
import Subscription from './Subscription';
import FooterNav from './FooterNav';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-section spad">
                <div className="container">
                    <Subscription/>
                    <FooterNav/>
                </div>
                <SocailTab/>
            </footer>
        )
    }
}

export default Footer;
