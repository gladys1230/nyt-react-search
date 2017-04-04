import React, {Component} from "react";

class SearchResult extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">{this.props.title}</h3>
				</div>
				<div className="panel-body">
				<p>{this.props.p}</p>
				<a href ={this.props.link}>{this.props.link}</a>
				<button for={this.props.key} className="btn btn-success pull-right">Save Article</button>
				</div>
			</div>
		)
	}
}

module.exports = SearchResult;