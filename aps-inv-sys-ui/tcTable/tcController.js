angular.module('tcTableModule', [])

 
  .controller('tcController', function($scope,$http) { 
   
	})    
.directive('tcTable', function() {
  return {
    restrict: 'E',
    templateUrl: 'tcTable/tcTable.html',
    scope: {
      fromUrl: '@',
    },
    link: function(scope, elem, attrs) {



      scope.ok = function() {

        console.log(scope.tcData);

      };


      scope.clear = function(customer) {
        for (var i = 0; i < scope.cust.length; i++) {
          cust[i].selectedRow === false;
        }

      };

    } 

  };
});

 


 