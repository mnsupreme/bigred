console.log("angular search factory")
app.factory('SearchFactory', function() {
    var factory = {}
    
    factory.getSearchResults = function(data, callback) {
       console.log('factory fired');
       var results = ["listing1", "listing2"]; //populate db
       callback(results)
       factory.results = results;
    };
    
   return factory;
})
