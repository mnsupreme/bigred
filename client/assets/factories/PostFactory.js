console.log("angular post factory")

app.factory('PostFactory',['$http', function($http){
    var factory = {}
    
    
    factory.addListing = function(data, callback) {
       console.log('factory fired');
       $http.post("/new", data).then(callback)
       factory.newListing = data;
    };

    factory.getSearchResults = function(data, callback) {
       console.log('factory fired');
       $http.post('/search', data).then(callback);
       console.log('vsvd')
       //var results = [{name:"listing1", id:'1'}, {name: "listing2", id:'2'}]; //populate db
       //callback(results)
       //factory.results = results;
    };
    
    factory.storeCurrent = function(item){
        factory.currentListing = item;
    }
    
    factory.getCurrent = function() {
        return factory.currentListing;
    }
    
   return factory;

}])
