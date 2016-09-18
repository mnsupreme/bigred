console.log('angular search controller')
app.controller('SearchController', ['$scope', 'PostFactory', '$location', function($scope, SearchFactory, $location) {
    
    displayResults();
    
    $scope.search = function(data) { //ng-click home, listing
        console.log(data);
        PostFactory.getSearchResults(data, function(result) {
            $scope.listings = result; //display all objects
            console.log($scope.searchResults);
            $location.url('/search');
        }) 
    };
    
    $scope.changeToNew = function() {
        $location.url('/new');
    }
    
    function displayResults() {
        var results = PostFactory.results;
        console.log(results);
        if (results !== null) {
            $scope.listings = results;
        }
        console.log($scope.searchResults)
    }
    
    
    
}]);

