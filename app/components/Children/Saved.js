import React, {Component} from "react";

class Saved extends Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="panel panel-default">
			<div className="panel-heading">
			<h3 className="panel-title text-center">Saved Articles</h3>
			</div>
			<div className="panel-body">Saved articles displays here:
			</div>

			</div>
			)
	}
}

module.exports = Saved;