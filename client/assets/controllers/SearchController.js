app.controller('SearchController', ['$scope', 'SearchFactory', '$location', function($scope, SearchFactory, $location) {
    $scope.search = function() { //ng-click home, listing
        console.log("hello");
        $location.url('/search')
        var results = SearchFactory.getSearchResults($scope.searchData) //ng-model: searchData, home, listing
        $scope.searchResults = results; //ng-model of listing: searchResults, listing
    };
}]);

