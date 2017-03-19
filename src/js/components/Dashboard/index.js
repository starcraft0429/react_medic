import React, { Component } from 'react';
import Menubar from './Menubar.js';
import LeftComponent from './LeftComponent.js';
import CenterComponent from './CenterComponent.js';
import RightComponent from './RightComponent.js';
import Footer from './Footer.js';
import './Dashboard.scss';
import testData from '../dummy.js'

export default class Dashboard extends Component{
	constructor(props){
		super(props);
		this.change_ticket_selection = this.change_ticket_selection.bind(this);
		this.state={
			selected_ticket: false
		}
	}
	change_ticket_selection(val){
		this.setState({selected_ticket: true});
	}
	render(){
		return(
			<div className = "DashboardView">
				<Menubar category={this.props.params['category']}/>
				<div className="dashBody">
					<div className="col-sm-5"><LeftComponent change_ticket_selection={this.change_ticket_selection}/></div>
					<div className="col-sm-4"><CenterComponent selected_ticket={this.state.selected_ticket}/></div>
					<div className="col-sm-3"><RightComponent /></div>
				</div>
				<Footer />
			</div>
		);
	}
}