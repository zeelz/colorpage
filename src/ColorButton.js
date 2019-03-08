import React, { Component } from 'react';

class ColorButton extends Component{
	render(){
		return(
			<button data-color={this.props.colorData} className={this.props.btnClasses} onClick={ this.props.doColorPage }>
            	{this.props.bText}
          </button>
		);
	}
}

export default ColorButton;