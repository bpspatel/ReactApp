import React, { Component } from 'react';

class Subscription extends Component {
    render() {
        return (
            <div className="newslatter-form">
                <div className="row">
                    <div className="col-lg-12">
                        <form action="#">
                            <input type="text" placeholder="Your email address" />
                            <button type="submit">Subscribe to our newsletter</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Subscription;