import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Home.scss';
import testData from '../dummy.js'

export default class Home extends Component{
	constructor(props){
		super(props);
		this.toDashboard = this.toDashboard.bind(this);
	}
	toDashboard(key){
		browserHistory.push(`/Dashboard/${key}`);
	}
	render(){
		return(
			<div className = "mainView">
				<div className = "banner">
					<div className = "combo_select">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">MED
							<span className="caret"></span></button>
							<ul className="dropdown-menu">
								<li><a href="#">Item1</a></li>
								<li><a href="#">Item2</a></li>
								<li><a href="#">Item3</a></li>
							</ul>
						</div>
					</div>
					<div className="title"> Choose a protocal
					</div>
				</div>
				<div className="table">
					<div className="items" style={{width: '100%'}}><div className="item">Unconscious</div></div>
					{ 	testData.tableLabels.map((label, key) => 
							<div key={key} className="items"><div className="item" onClick={()=>this.toDashboard(key)}>{ label }</div></div>
						)
					}
				</div>
			</div>
		);
	}
}