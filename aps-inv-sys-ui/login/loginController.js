angular.module('loginModule', [ ])
.controller('loginController', function($location,$rootScope,$scope,$routeParams) {
	     
      $rootScope.login = function() { 
         if($scope.user!="APS")
        {
          //return;
        }
        $routeParams.loginFlag=true;
        $rootScope.loginFlag = true; 
        $rootScope.user=$scope.user;
       
        $scope.loginFlag=true;
        $location.path('/inward');
      }; 
 
      $rootScope.logout = function() { 
        $rootScope.user = "";
        $rootScope.loginFlag = false; 
        $routeParams.loginFlag=true;
        $location.path('/');
      };  
	}) 