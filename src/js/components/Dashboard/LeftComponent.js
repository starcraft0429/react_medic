import React, { Component } from 'react';
import './Dashboard.scss';
import testData from '../dummy.js'

export default class LeftComponent extends Component{
	constructor(props){
		super(props);
	}
	render_medic_block(){
		return 	testData.MEDICs.map((medic, key) => 
					<div key={key} className="ticket_board">
						<div className="ticket_avatar" style={{	background: 'rgb(37,99,170)'}}>MED</div>
						<div className="ticket_content">{ medic }</div>
					</div>
				)
	}
	render_AID_block(){
		return 	testData.AIDs.map((aid, key) => 
					<div key={key} className="ticket_board AIDs" onClick={()=>this.ticket_clicked(key)}>
						<div className="ticket_avatar" style={{	background: 'rgb(240,163,35)'}}>AID</div>
						<div className="ticket_content">{ aid }</div>
					</div>
				)
	}
	render_AMB_block(){
		return 	testData.AMBs.map((amb, key) => 
					<div key={key} className="ticket_board">
						<div className="ticket_avatar" style={{	background: 'rgb(158,37,170)'}}>AMB</div>
						<div className="ticket_content">{ amb }</div>
					</div>
				)
	}
	ticket_clicked(key){
		$(".AIDs").css("background","white");
		$(".AIDs").css("color","black");
		$($(".AIDs")[key]).css("background","rgb(37,77,170)");
		$($(".AIDs")[key]).css("color","white");
		this.props.change_ticket_selection(true);
	}
	render(){
		return(
			<div className = "">
				<div className="sort_letter">RESPONSE CRITERIA</div>
				<div className="title_letter">MEDIC</div>
				<div className="medic_block">{this.render_medic_block()}</div>
				<div className="title_letter">AID</div>
				<div className="medic_block">{this.render_AID_block()}</div>
				<div className="title_letter">AMB</div>
				<div className="medic_block">{this.render_AMB_block()}</div>
			</div>
		);
	}
}