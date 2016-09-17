console.log("angular user factory")
app.factory('UserFactory', ['$http', function($http){
  console.log("user factory loaded!");
  var factory={};
  	factory.login = function(user, callback){
  		console.log('log in factory function fired!')
  		$http.post('/login', user).then(callback)
  	}

  	factory.register = function(user, callback){
  		console.log('register factory function fired!')
  		$http.post('/register', user).then(callback)
  	}
  	
  return factory
}])
