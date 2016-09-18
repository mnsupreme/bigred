console.log("angular create factory")
app.factory('PostFactory', function() {
    var factory = {}
    
    factory.addListing = function(data, callback) {
       console.log('factory fired');
       http.post("/new", data).then(callback)
       factory.newListing = data;
    };

    factory.getSearchResults = function(data, callback) {
       console.log('factory fired');
       var results = ["listing1", "listing2"]; //populate db
       callback(results)
       factory.results = results;
    };
    
   return factory;
})
