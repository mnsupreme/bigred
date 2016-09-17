app.factory('userFactory', ['$http', function($http){
  console.log("user factory loaded!");
  var factory={};
  	this.login = function(user, callback){
  		console.log('log in factory function fired!')
  		$http.post('/login', user).then(callback)
  	}

  	this.register = function(user, callback){
  		console.log('register factory function fired!')
  		$http.post('/register', user).then(callback)
  	}
  	
  return factory
}])
