import React, { Component }  from 'react';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';

class Clock extends Component{
	constructor(props){
			super(props);
			this.state = {date: new Date(),onOffState:true}
	}

    componentDidMount(){    
    	 	this.timerID = setInterval(
    				()=> this.tick(),
    				1000
    			);   
    		
    }
    componentWillUnmount(){
    	clearInterval(this.timerID);
    }
    
    tick(){
    	if(this.state.onOffState){
    		this.setState({
    		date: new Date()
    		})
    	}
    		
    } 
    
    stopClick(){
    	this.setState(state=>({
    		onOffState: !state.onOffState ? true : false
    	}))    	
    }

	render(){
		return(
			<div>
				<LoggingButton/>
				<Toggle/>
				<h1>Clock Time</h1>
				<h2>It is  {this.state.date.toLocaleTimeString()}</h2>
				<button onClick={()=>this.stopClick()}>{this.state.onOffState ? 'Pause' : 'Start'}</button>
			</div>
		)
	}
}
export default Clock;