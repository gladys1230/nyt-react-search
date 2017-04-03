var React = require("react");

var Form = require("./Children/Form");
var Results = require("./Children/Results");
var Saved = require("./Children/Saved");
var helpers = require("./utils/helpers.js");

var Main = React.createClass({
            getInitialState: function() {
                return {
                    searchTerm: "",
                    startYear: "",
                    endYear: "",
                    results: [],
                    saved: []
                }
            },

            setSearch: function(search, startYear, endYear) {
                this.setState({
                    searchTerm: search,
                    startYear: startYear,
                    endYear: endYear
                })
            },

            updateSaved: function(saved) {
                console.log("going through the updateSaved");
                helpers.getSaved()
                    .then(function(response) {
                        if (response != this.state.saved) {
                            console.log("componentDidMount");
                            console.log("History", response);
                            this.setState({
                                saved: response
                            })
                        }
                    }.bind(this))
            },

            componentDidMount: function(prevProp, prevState) {
                if (prevState.save != this.state.saved || prevState.searchTerm != this.state.searchTerm || prevState.startYear != prevState.endYear) {
                    console.log("update to search");

                    if (prevState.searchTerm != this.state.searchTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear) {
                        helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
                            .then(function(data) {
                                if (data != this.state.results) {
                                    console.log("Getting new data");
                                    this.setState({
                                        results: data
                                    })
                                }
                            }.bind(this))
                    } else if (prevState.saved != this.state.saved) {
                        console.log("checking for saved articles");
                    }
                }
            },
            componentDidMount: function() {
                //get latest saved data
                helpers.getSaved()
                    .then(function(response) {
                        if (response != this.state.saved) {
                            console.log("componentDidMount");
                            console.loc("history", response);
                            this.setState({
                                saved: response
                            })
                        }
                    }.bind(this))
            },
            render: function() {
                return ( < div className = "container" >
                    < div className = "col-md-12" >
                    < Form setSearch = { this.setSearch }
                    /> < /div> < div className = "col-md-12" >
                    < Results resulte = { this.state.results }
                    updateSaved = { this.updateSaved }
                    /> < /div> < div className = "col-md-12" >
                    < Saved saved = { this.state.saved }/> 
                    </div>
                  </div>
                  )
                }
            })

            module.exports = Main;
