import React, { Component } from 'react';
export default class Button extends Component {
	render() {
		this.props.disabled?' disabled' : ''
	}
}