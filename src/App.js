import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import Slider from './Component/Slider'
import Header from './Component/Nav/Header';
import SearchBar from './Component/Nav/SearchBar';
import Navdiscountbar from './Component/Navdiscountbar/Navdiscountbar';
import Home from './Component/Mainsection/Home';
import Contact from './Component/Pages/Contact';
import About from './Component/Pages/About';
import Footer from './Component/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>	
				<div>
					<div id="preloder">
						<div className="loader"></div>
					</div>
					<SearchBar />
					<Header />
					<Navdiscountbar/>
										
					<Switch>
              			<Route exact path='/' component={Home} />
              			<Route exact path='/Contact' component={Contact} />             				
              			<Route exact path='/About' component={About} />             				
          			</Switch>
					<Footer/>

				</div>
			</Router>	
		)
	}
}
export default App;
