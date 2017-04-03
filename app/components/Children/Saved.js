var React = require("react");

var Saved = React.createClass({
	render: function(){
		return(
			<div className="panel panel-info">
			<div className="panel-heading">
			<h3 className="panel-title text-center">Articles Saved</h3>
			</div>
			<div className="panel-body text-center">

			{this.props.saved.map(function(serarch, i){
				return(
					<div>
					<p nytKey={i}>{search.title}<a href={search.url}> link here</a></p>
					</div>)
			}
			)}
			</div>
			</div>

			)
	}
});
module.exports = Saved;