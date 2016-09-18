console.log('angular create controller')
app.controller('CreateController', ['$scope', 'CreateFactory', '$location', function($scope, PostFactory, $location) {
    
    post.residents = []
    $scope.createerror = ""
    $scope.create = function(new){
        console.log('create angular controller function fired');
        if(post.zip.length !=5){
        	$scope.createerror = "please enter a valid zip"
        	return
        }


    }

    $scope.append = function(){
    	console.log('append function fired')
    	post.residents.push(resident)
    	
    }


}])