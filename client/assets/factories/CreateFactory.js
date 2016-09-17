app.factory('CreateFactory', function() {
    var factory = {}
    
    factory.addListing = function(data, callback) {
       console.log('factory fired');
       http.post("/new", data).then(callback)
       factory.newListing = data;
    };
    
   return factory;
})
