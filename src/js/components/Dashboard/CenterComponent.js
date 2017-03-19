import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import PDF from 'react-pdf-js';
import ReactPDF from 'react-pdf';
import './Dashboard.scss';
import testData from '../dummy.js'

export default class CenterComponent extends Component{
	constructor(props){
		super(props);
		this.openPDF = this.openPDF.bind(this);
		this.closePDF = this.closePDF.bind(this);
		this.state = {
						showPDF: false
		};
	}
	openPDF(){
		this.setState({showPDF: true});
	}
	closePDF(){
		this.setState({showPDF: false});
	}
	render_indicator_block(){
		return 	<ul>
					{testData.indicators.map((indicator, key) =>
						<li key={key} className="" >
							<div className="list_icon">|</div>
							<div className="list_content">{indicator}</div>
						</li>
					)}
				</ul>
	}
	render(){
		let bgColor = "white";
		let textColor = "black";
		let pdfButton = <button className="btn btn-blue" style={{'marginTop': '7px'}} onClick={this.openPDF}>ESPboundaries.pdf</button>;
		if(this.props.selected_ticket == true){
			bgColor = "rgb(2,76,168)";
			textColor = "white";
			pdfButton = <button className="btn btn-default" style={{'marginTop': '7px'}} onClick={this.openPDF}>ESPboundaries.pdf</button>;
		}
		return(
			<div className = "">
				<div className="sort_letter">DISPATCHER TOOLS</div>
				<div className="title_letter">Poisoning with ALS Indicators</div>
				<div className="border_board">{this.render_indicator_block()}</div>
				<div className="title_letter">Accidental Ingestion</div>
				<div className="border_board" style={{'background': bgColor, 'color': textColor}}>
					<ul>
						<li>
							<div className="list_icon" style={{'color': textColor}}>|</div>
							<div className="list_content">Examples
								<ul>
									{testData.examples.map((example, key) =>
										<li key={key} className="" >
											<div className="list_icon">|</div>
											<div className="list_content">{example}</div>
										</li>
									)}
								</ul>
							</div>
						</li>
						<li>
							<div className="list_icon" style={{'color': textColor}}>|</div>
							<div className="list_content">Consult with Poison Control, if necessary, to determine response plan
								<ul>
									{testData.consults.map((consult, key) =>
										<li key={key} className="" >
											<div className="list_icon">|</div>
											<div className="list_content">{consult}</div>
										</li>
									)}
								</ul>
							</div>
						</li>
						<li>
							<div className="list_icon" style={{'color': textColor}}>|</div>
							<div className="list_content">
								{pdfButton}
							</div>
						</li>
					</ul>
				</div>
				<Modal show={this.state.showPDF} onHide={this.closePDF}>
					<Modal.Header closeButton>
						<Modal.Title>ESPboundaries.pdf</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{'overflow': 'hidden'}}>
						<ReactPDF width={568} file="../public/pdf/map.pdf" />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}