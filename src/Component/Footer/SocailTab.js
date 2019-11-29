import React, { Component } from 'react';

class SocailTab extends Component {

    render() {
        return (
            <div className="social-links-warp">
                <div className="container">
                    <div className="social-links">
                        <a href="" className="instagram"><i className="fa fa-instagram"></i><span>instagram</span></a>
                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i><span>pinterest</span></a>
                        <a href="" className="facebook"><i className="fa fa-facebook"></i><span>facebook</span></a>
                        <a href="" className="twitter"><i className="fa fa-twitter"></i><span>twitter</span></a>
                        <a href="" className="youtube"><i className="fa fa-youtube"></i><span>youtube</span></a>
                        <a href="" className="tumblr"><i className="fa fa-tumblr-square"></i><span>tumblr</span></a>
                    </div>
                </div>

                <div className="container text-center pt-5">
                    <p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                    </p>
                </div>


            </div>
        )
    }

}

export default SocailTab;