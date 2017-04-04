import React, { Component } from "react";
import SearchResult from "./grandchildren/SearchResult";

class Results extends Component{

	showResults(){

		if(this.props.res){

			return (<div> { this.props.res.map((x, i) => <div>{x.web_url}</div>)
			}
			</div>)
		}

		if(this.props.res){


			return (<div> { this.props.res.map((x, i) => 
				<SearchResult key={i} 
				title={x.headline.main} 
				p={x.lead_paragraph} 
				link={x.web_url} 
				saved={false}/>)}
			</div>)
		}
		return "Search results will be displayed here."
	}

	render(){
		return (
			<div className="panel panel-default">
  			  <div className="panel-heading">
    			<h3 className="panel-title text-center">Results</h3>
  			  </div>
  			  <div className="panel-body">
    			<div id="searchResults" className="containter">
    				{this.showResults()}
    			</div>
  			  </div>
			</div>
		)
	}
}

module.exports = Results;