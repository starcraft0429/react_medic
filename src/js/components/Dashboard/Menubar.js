import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Modal, Button} from 'react-bootstrap';
import './Dashboard.scss';
import '../Home/Home.scss';
import testData from '../dummy.js';

export default class Menubar extends Component{
	constructor(props){
		super(props);
		this.openCategory = this.openCategory.bind(this);
		this.closeCategory = this.closeCategory.bind(this);
		this.state={
						showCategory: false
		};
	}
	getCategoryName(props){
		const id = this.props.category;
		const category = testData.tableLabels[id];
		return category;
	}
	openCategory(){
		this.setState({showCategory: true});
	}
	closeCategory(){
		this.setState({showCategory: false});
	}
	toDashboard(key){
		this.closeCategory();
		browserHistory.push(`/Dashboard/${key}`);
	}
	render_category(){
		const id = this.props.category;
		const items = testData.tableLabels.map((label, key) =>{
								let color = null;
								if(key == id) color = {'background': 'rgb(0,75,167)', 'color': 'white'};
								return  <div key={key} className="items">
											<div className="item" style={color} onClick={()=>this.toDashboard(key)}>{ label }</div>
										</div>
							})
		return items;
					
	}
	render(){
		return(
			<div className = "menubar">
				<div className="menuInside">
					<div className="left_menuItems">
						<div className="menuItem1">
							<div className="dropdown">
								<button className="btn btn-dark-blue dropdown-toggle" type="button" data-toggle="dropdown">MED
								<span className="caret"></span></button>
								<ul className="dropdown-menu">
									<li><a href="#">Item1</a></li>
									<li><a href="#">Item2</a></li>
									<li><a href="#">Item3</a></li>
								</ul>
							</div>
						</div>
						<div className="menuCategory">
							<button className="btn btn-dark" onClick={this.openCategory}>{this.getCategoryName()}  <span className="glyphicon glyphicon-menu-down"></span></button>
						</div>
						<div className="menuItem3">
							<button className="btn btn-default">107 Spring St, Seattle, WA 98104</button>
						</div>
					</div>
					<div className="right_menuItems">
						<button className="btn btn-default">ON CALL <span style={{fontWeight: 'bold'}}>01:02 - #12345</span></button>
					</div>
				</div>
				<Modal bsSize='large' show={this.state.showCategory} onHide={this.closeCategory}>
					<Modal.Header closeButton>
						<Modal.Title>{this.getCategoryName()}</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{'overflow': 'hidden'}}>
						<div className="table">
							<div className="items" style={{width: '100%'}}><div className="item">Unconscious</div></div>
							{this.render_category()}
						</div>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}