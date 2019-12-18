import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from './Component/Slider'
import Header from './Component/Nav/Header';
import SearchBar from './Component/Nav/SearchBar';
import Navdiscountbar from './Component/Navdiscountbar/Navdiscountbar';
import Mainsection from  './Component/Mainsection/Mainsection';
import MainsectionSecond from  './Component/Mainsection/MainsectionSecond';
import MainsectionThird from  './Component/Mainsection/MainsectionThird';
import MainsectionFourth from  './Component/Mainsection/MainsectionFourth';
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
				<Mainsection/>
                <MainsectionSecond/>
				<MainsectionThird/>
				<MainsectionFourth/>		

				<Footer/>
			</div>
		)
	}
}
export default App;
