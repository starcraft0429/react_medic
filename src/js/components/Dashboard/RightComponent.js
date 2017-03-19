import React, { Component } from 'react';
import './Dashboard.scss';
import testData from '../dummy.js'

export default class RightComponent extends Component{
	constructor(props){
		super(props);
	}
	render_arrival_block(){
		return 	<ul>
					{testData.arrivals.map((arrival, key) =>
						<li key={key} className="" >
							<div className="list_icon">|</div>
							<div className="list_content">{arrival}</div>
						</li>
					)}
				</ul>
	}
	render_history_block(){
		const historyBlock = testData.historys.map((history, key) =>{
								let color = null;
								if(history.avatar == "MED") color = 'rgb(37,99,170)';
								else if(history.avatar == "AID") color = 'rgb(240,163,35)';
								else if(history.avatar == "AMB") color = 'rgb(158,37,170)';
								return  <div key={key} className="history_items">
											<div className="history_time">{history.time}</div>
											<div className="history_item_board">
												<div className="ticket_avatar" style={{'background': color}}>{history.avatar}</div>
												<div className="ticket_content">{history.content}</div>
											</div>
										</div>
							})
		return historyBlock;
	}
	render(){
		return(
			<div className = "">
				<div className="sort_letter" style={{'marginBottom': '20px'}}>PRE-ARRIVALS</div>
				<div className="border_board">{this.render_arrival_block()}</div>
				<div className="sort_letter">PREMISE HISTORY</div>
				{this.render_history_block()}
			</div>
		);
	}
}