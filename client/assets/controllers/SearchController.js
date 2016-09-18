console.log('angular search controller')
app.controller('SearchController', ['$scope', 'PostFactory', '$location', '$routeParams', function($scope, PostFactory, $location, $routeParams) {
    
    displayResults();
    getItem();
    
    $scope.search = function(data) { //ng-click home, listing
        console.log(data);
        PostFactory.getSearchResults(data, function(result) {
           //display all objects
            $location.url('/search');
        })
        $location.url('/search');
    };
    
    $scope.changeToNew = function() {
        $location.url('/new');
    }
    
    $scope.storeItem = function(item) {
        PostFactory.storeCurrent(item);
    }
    
    function getItem() {
        $scope.current = PostFactory.getCurrent()
    }
    
    function displayResults() {
        var results = PostFactory.results;
        console.log(results);
        if (results !== null) {
            $scope.listings = results;//[{price:120, id:'1', address1: "egsdf", 
                    residents:[{age:'10', gender:"female", ros:'apartment mate'}, 
                        {age:'13', gender:"male", ros:'roommate'}]}, 
                {price:1440, id:'2', address1: "egfd"}]//results;
        }
        console.log(results)
    }
    
    $scope.show = function(id){

    } 
    
}]);

