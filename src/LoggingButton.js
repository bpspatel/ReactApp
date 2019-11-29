import React, { Component }  from 'react';

class LoggingButton extends Component{
	handleClick = () =>{
		console.log('This is ', this);
	}

	render(){
		return(
			<button onClick={(e)=>this.handleClick(e)}>Click me</button>
		)
	}
}
export default LoggingButton;