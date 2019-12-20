import React, { Component }  from 'react';

class About extends Component{
	render(){
		return(
				<React.Fragment>
						<section className="page-add">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-4">
				                    <div className="page-breadcrumb">
				                        <h2>Shirts<span>.</span></h2>
				                        <a href="#">Home</a>
				                        <a href="#">Dresses</a>
				                        <a className="active" href="#">Night Dresses</a>
				                    </div>
				                </div>
				                <div class="col-lg-8">
				                    <img src="img/add.jpg" alt=""/>
				                </div>
				            </div>
				        </div>
				    </section>
				    <section className="product-page">
				        <div className="container">
				            <div className="product-control">
				                <a href="#">Previous</a>
				                <a href="#">Next</a>
				            </div>
				            <div className="row">
				                <div className="col-lg-6">
				                    <div className="product-slider owl-carousel">
				                        <div className="product-img">
				                            <figure>
				                                <img src="img/product/product-1.jpg" alt=""/>
				                                <div className="p-status">new</div>
				                            </figure>
				                        </div>
				                        <div className="product-img">
				                            <figure>
				                                <img src="img/product/product-1.jpg" alt=""/>
				                                <div className="p-status">new</div>
				                            </figure>
				                        </div>
				                    </div>
				                    
				                </div>
				                <div className="col-lg-6">
				                    <div className="product-content">
				                        <h2>Dotted Blue Shirt</h2>
				                        <div className="pc-meta">
				                            <h5>$22.90</h5>
				                            <div className="rating">
				                                <i className="fa fa-star"></i>
				                                <i className="fa fa-star"></i>
				                                <i className="fa fa-star"></i>
				                                <i className="fa fa-star"></i>
				                                <i className="fa fa-star"></i>
				                            </div>
				                        </div>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
				                            viverra maecenas accumsan lacus vel facilisis.</p>
				                        <ul class="tags">
				                            <li><span>Category :</span> Men’s Wear</li>
				                            <li><span>Tags :</span> man, shirt, dotted, elegant, cool</li>
				                        </ul>
				                        <div className="product-quantity">
				                            <div className="pro-qty">
				                                <input type="text" value="1"/>
				                            </div>
				                        </div>
				                        <a href="#" className="primary-btn pc-btn">Add to cart</a>
				                        <ul class="p-info">
				                            <li>Product Information</li>
				                            <li>Reviews</li>
				                            <li>Product Care</li>
				                        </ul>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>
				    <section className="related-product spad">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-12 text-center">
				                    <div className="section-title">
				                        <h2>Related Products</h2>
				                    </div>
				                </div>
				            </div>
				            <div className="row">
				                <div className="col-lg-3 col-sm-6">
				                    <div className="single-product-item">
				                        <figure>
				                            <a href="#"><img src="img/products/img-1.jpg" alt=""/></a>
				                            <div className="p-status">new</div>
				                        </figure>
				                        <div className="product-text">
				                            <h6>Green Dress with details</h6>
				                            <p>$22.90</p>
				                        </div>
				                    </div>
				                </div>
				                <div className="col-lg-3 col-sm-6">
				                    <div className="single-product-item">
				                        <figure>
				                            <a href="#"><img src="img/products/img-2.jpg" alt=""/></a>
				                            <div className="p-status sale">sale</div>
				                        </figure>
				                        <div className="product-text">
				                            <h6>Yellow Maxi Dress</h6>
				                            <p>$25.90</p>
				                        </div>
				                    </div>
				                </div>
				                <div className="col-lg-3 col-sm-6">
				                    <div className="single-product-item">
				                        <figure>
				                            <a href="#"><img src="img/products/img-3.jpg" alt=""/></a>
				                            <div className="p-status">new</div>
				                        </figure>
				                        <div className="product-text">
				                            <h6>One piece bodysuit</h6>
				                            <p>$19.90</p>
				                        </div>
				                    </div>
				                </div>
				                <div className="col-lg-3 col-sm-6">
				                    <div className="single-product-item">
				                        <figure>
				                            <a href="#"><img src="img/products/img-4.jpg" alt=""/></a>
				                            <div className="p-status popular">popular</div>
				                        </figure>
				                        <div className="product-text">
				                            <h6>Blue Dress with details</h6>
				                            <p>$35.50</p>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>
				</React.Fragment>
		)
	}
}

export default About;
