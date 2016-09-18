console.log('angular create controller');

app.controller('CreateController', ['$scope', 'PostFactory', '$location', '$localStorage', function($scope, PostFactory, $location, $localStorage) {
  	$localStorage.user_id
    console.log($localStorage.user_id)
    $scope.number = 0;
    $scope.createerror = "";
    $scope.post = {
    	residents:[],
    	user_id: $localStorage.user_id
    }
    $scope.display = "hidden"
    $scope.create = function(post){
        console.log('create angular controller function fired');
        if(!$scope.post.zip || $scope.post.zip.length !== 5){
            $scope.createerror = "please enter a valid zip";
            return;
        }
        post.guests = parseInt(post.guests)
        post.price = parseInt(post.price)
        PostFactory.addListing(post, function(result){
        	console.log('post was successfully added', result)
        	$location.url('/')
        })
    };

    $scope.append = function(resident){
    	console.log('append function fired')
    	$scope.post.residents.push(resident)
    	$scope.number += 1
    	$scope.current_residents = $scope.post.residents
    	$scope.display = 'block'

    };


}])

