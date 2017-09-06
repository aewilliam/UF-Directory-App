angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {

      $scope.listings.push({code: $scope.listings.buildingCode, name: $scope.listings.buildingName});
      $scope.listings.buildingCode = "";
      $scope.listings.buildingName = "";
    
    };

    $scope.deleteListing = function(index) {

      var index = $scope.listings.indexOf(index);
      $scope.listings.splice(index, 1);

    };
    
    $scope.showDetails = function(index) {

      $scope.details = $scope.listings[index];
      console.log("details");
    };
    
    $scope.searchListing= function(input){};
  }
]);