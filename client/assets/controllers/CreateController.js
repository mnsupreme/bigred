app.controller('CreateController', ['$scope', 'CreateFactory', '$location', function($scope, CreateFactory, $location) {
    
    $scope.createNew = function(data){
        console.log(data);
        CreateFactory.addListing(data, function(){
            console.log("data added: " + data);
        })
    }}
])