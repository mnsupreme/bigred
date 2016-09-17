app.controller('SearchController', ['$scope', 'SearchFactory', '$location', function($scope, SearchFactory, $location) {
    
    displayResults();
    
    $scope.search = function(data) { //ng-click home, listing
        console.log(data);
        SearchFactory.getSearchResults(data, function(result) {
            $scope.listings = result; //display all objects
            console.log($scope.searchResults);
            $location.url('/search');
        }) 
    };
    
    $scope.changeToNew = function() {
        $location.url('/new');
    }
    
     function displayResults() {
        var results = SearchFactory.results;
        console.log(results);
        if (results !== null) {
            $scope.listings = results;
        }
        console.log($scope.searchResults)
    }
    
    
    
}]);

