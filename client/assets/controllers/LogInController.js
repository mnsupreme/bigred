console.log('angular login controller')
app.controller('LogInController', ['$scope', 'UserFactory',  '$routeParams', '$localStorage', '$location', function($scope, UserFactory,  $routeParams, $localStorage, $location){
		$scope.$storage = $localStorage.user_id
		$scope.registererrors = ""
		$scope.loginerrors = ""
		$scope.login = function(user){
			console.log('login controller function fired')
			UserFactory.login(user, function(result, err){
				if(err){
					$scope.loginerrors = "invalid login"
				}
				else{
				$localStorage.user_id = result.data._id
				$location.url('/search')
				}
			})
		}
		$scope.logout = function(){
			$location.url('/home.html')
			$localStorage.$reset()
		}

		$scope.register = function(user){
			console.log('register angular controller function fired')
			for (each in user){
				if(user[each] == null){
					$scope.registererrors = "please fill in all fields"
					return
				}
			}
			UserFactory.register(user, function(result){
				$localStorage = result.data
				$location('/home.html')
			})
		}
	
	}])