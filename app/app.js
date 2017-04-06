//include the main react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//include the main component
var Main = require("./Components/Main")

//this code here allows us to render our main component(in this case "Main")
ReactDOM.render(
	<Main />,
	document.getElementById("app")
	)