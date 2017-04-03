var React = require("react");

var Form = React.createClass({
    getInitialState: function() {
        return {
            term: "",
            startYear: "",
            endYear: ""
        }
    },

    handleClick: function() {
        this.props.setSearch(this.state.term, this.state.startYear, this.state.endYear);
    },

    handleChange: function(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    },

    render: function() {
        return ( < div className = "panel panel-primary" >
            < div className = "panel-heading" >
            < h3 className = "panel-title text-left" > Search < /h3> < /div> < div className = "panel-body text-left" >
            < form >
            < div className = "form-group" >
            < h4 className = "">< strong > Topic < /strong></h4> < input type = "text"
            className = "form-control text-left"
            value = { this.state.term }
            onChange = { this.handleChange }
            name = "term"
            required / >

            < h4>< strong > Start Year < /strong></h4> < input type = "text"
            className = "form-control text-left"
            value = { this.state.startYear }
            onChange = { this.handleChange }
            name = "startYear"
            required / >

            < h4>< strong > End Year < /strong></h4> < input type = "text"
            className = "form-control text-left"
            value = { this.state.endYear }
            onChange = { this.handleChange }
            name = "endYear"
            required / >

            < br />
            < button type = "button"
            className = "btn btn-primary"
            onClick = { this.handleClick } > Search News < /button>


            </div>
            </form>
            </div>
            </div>
        )
    }
});

module.exports = Form;
