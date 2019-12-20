import React, { Component } from 'react';
import Mainsection from  './Mainsection';
import MainsectionSecond from  './MainsectionSecond';
import MainsectionThird from  './MainsectionThird';
import MainsectionFourth from  './MainsectionFourth';
import Slider from '../Slider'
class Home extends Component {
   render() {
        return (                
                    <React.Fragment>
                        <section className="hero-slider">
                             <Slider />
                        </section>
                        <Mainsection/>
                        <MainsectionSecond/>
                        <MainsectionThird/>
                        <MainsectionFourth/>
                    </React.Fragment>
                )
            }
        }

export default Home;
