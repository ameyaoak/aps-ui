angular.module('newTcModule', ['toastr' ])
    .controller('newTcController', function(toastr,$scope,$http,$routeParams) {
    	
    	 $scope.countmm=0;
    	 $scope.countcut=0;
    	 $scope.counthv=0;
    	 
 
        var baseUrl='http://new-server:8080';

        var url = baseUrl+"/tc/"+$routeParams.tcNo; 
        $http.get(url)
            .success(function(data) {//delete if success
                $scope.tc=data;
                $scope.gridRows=data.gridRows;
            }).error(function(data){
                toastr.error('Error in getting TC');
            });

        $scope.$watch('[tc.mm,tc.cut,tc.hv]', function (newValue, oldValue) {
           $scope.countmm  = newValue[0].split(',').length;
           $scope.countcut  = newValue[1].split(',').length;
           $scope.counthv  = newValue[2].split(',').length;
           
        }, true); 


        $scope.save = function() {
        	
        	if($scope.countmm==$scope.countcut && $scope.countcut==$scope.counthv){  
            var tcObject = $scope.tc; 
            var url = baseUrl+'/tc'; 
            $http.put(url,tcObject)
                .success(function(data) {//delete if success
                    toastr.success('Updated TC');
                    //$scope.exportDataVariable = data;
                }).error(function(data){
                    toastr.error('Error in updating TC');
                });
            }
        	else{
        		toastr.error('Please check micro readings');
        	}
        };
         
    }) ;