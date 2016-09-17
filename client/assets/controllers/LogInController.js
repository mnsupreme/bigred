app.controller('LogInController', ['$scope', 'UserFactory',  '$routeParams', '$localStorage', '$location', function($scope, someFactory,  $routeParams, $localStorage, $location){
		$scope.$storage = $localStorage
		$scope.login = function(user){
			userFactory.login(user, function(result){
				if(err){
					$scope.loginerrors = "invalid login"
				}
				else(
				$localStorage = result.data
				$location.url('/search')
				)
			})
		}
		$scope.logout = function(){
			$location.url('/home.html')
			$localStorage.$reset()
		}

		$scope.register = function(user){
			for (each in user){
				if(user[each] != null){
					$scope.regiestererrors = "please fill in all fields"
					return
				}
			}
			userFactory.register(user, function(result){
				$localStorage = result.data
			})
		}
	
	}])