import "whatwg-fetch";


// var nytKey = "6838a5d6159f45418b7286018c8716c2";*/

var helper = {

    fetchData: function(query, startDate, endDate){
        return new Promise(function(resolve, reject){
          fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6838a5d6159f45418b7286018c8716c2&q=${query}&begin_date=${startDate}&end_date=${endDate}`)
         .then(response => response.json())
        .then((responseData) => {
          resolve(responseData.response.docs);
        })
        .catch(err => console.log(err));
    });
  }

};

module.exports = helper;