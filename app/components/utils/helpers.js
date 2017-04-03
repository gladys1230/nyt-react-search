var axios = require("axios");

var nytKey = "6838a5d6159f45418b7286018c8716c2";

var helpers = {

    runQuery: function(searchTerm, startYear, endYear) {

        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&page=0&sort=newest&begin_date=" + startYear + "0101&end_date=" + endYear + "0101&api-key=" + nytKey;

        var options = {

        	url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        	qs: {
        		"api-key": "6838a5d6159f45418b7286018c8716c2",
        		"q": searchTerm,
        		"begin_date": "20110312",
        		"end_date": "20170403",
        		"sort": "newest"
        	}

        };
        return axios.get(queryUrl)
        .then(function(response){
        	var data = response.data.response.docs;
        	return data;
        })
    },

    getSaved: function(){
    	return axios.get("/api")
    	.then(function(response){
    		console.log("I am inside the get saved function");
    		console.log("response.data");
    	});
    },
    saveArticle: function(article, i){
    	return axios.post("/api", article)
    	.then(function(results){
    		return(results);
    	})
    }
}

module.exports = helpers
