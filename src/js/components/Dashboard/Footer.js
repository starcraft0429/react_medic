import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Dashboard.scss';
import testData from '../dummy.js'

export default class Footer extends Component{
	constructor(props){
		super(props);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state={
						showModal:false
		}
	}
	openModal(){
		this.setState({showModal: true});
	}
	closeModal(){
		this.setState({showModal: false});
	}
	render_subscribe(){
		return	testData.subscribes.map((subscribe, key) => 
					<div key={key} className="subscribe_unit">
						<div className="subscribe_num">{key+1}</div>
						<div className="subscribe_content">{subscribe}</div>
					</div>
				)
					
	}
	render(){
		return(
			<div className="footerbar">
				<div className="footerInside">
					<div className="left_footer_item">
						<div className="input-group input-group-lg">
							<input type="text" className="form-control" placeholder="Add comment..." />
							<span className="input-group-btn">
								<button className="btn btn-post" type="button">POST</button>
							</span>
						</div>
					</div>
					<div className="right_footer_item">
						<div className="btn-group dropup">
							<button type="button" className="btn btn-instruction btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Emex.Instructions
								<span className="caret"></span>	
							</button>
							<ul className="dropdown-menu">
								<li onClick={this.openModal} ><a href="#">I am modal</a></li>
							    <li><a href="#">I am nothing</a></li>
							    <li><a href="#">I am nothing</a></li>
							    <li role="separator" className="divider"></li>
							    <li><a href="#">I am nothing</a></li>
							</ul>
						</div>
						<button className="btn btn-call btn-lg">COMPLETE CALL</button>
					</div>
				</div>
				<Modal bsSize='large' show={this.state.showModal} onHide={this.closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>CPR/Adult</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{'overflow': 'hidden'}}>
						{this.render_subscribe()}
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}