import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from './Component/Slider'
import Header from './Component/Nav/Header';
import SearchBar from './Component/Nav/SearchBar';
import Navdiscountbar from './Component/Navdiscountbar/Navdiscountbar';
import TrendContainer from './Component/Container/TrendContainer';
import LatestProductContainer from './Component/Container/LatestProductContainer';
import LookBookContainer from './Component/Container/LookBookContainer';
import Footer from './Component/Footer/Footer'

class App extends Component {
	render() {
		return (
			<div>
				<div id="preloder">
					<div className="loader"></div>
				</div>
				<SearchBar />
				<Header />
				<Navdiscountbar/>
				<section className="hero-slider">
					<Slider />
				</section>				
			 	<TrendContainer/>
			 	<LatestProductContainer/>
				<LookBookContainer/>				
				<div className="logo-section spad">
					<div className="logo-items owl-carousel">
						<div className="logo-item">
							<img src="img/logos/logo-1.png" alt="" />
						</div>
						<div className="logo-item">
							<img src="img/logos/logo-2.png" alt="" />
						</div>
						<div className="logo-item">
							<img src="img/logos/logo-3.png" alt="" />
						</div>
						<div className="logo-item">
							<img src="img/logos/logo-4.png" alt="" />
						</div>
						<div className="logo-item">
							<img src="img/logos/logo-5.png" alt="" />
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}
export default App;
