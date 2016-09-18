console.log('angular create controller')
app.controller('CreateController', ['$scope', 'PostFactory', '$location', function($scope, PostFactory, $location) {
    
    $scope.createNew = function(data){
        console.log(data);
        PostFactory.addListing(data, function(){
            console.log("data added: " + data);
        })
    }}
])