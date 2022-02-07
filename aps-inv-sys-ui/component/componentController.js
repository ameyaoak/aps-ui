angular.module('componentModule', ['tcTableModule', 'toastr'])
    .controller('componentControllers', function (toastr, $scope, $http) {

        var baseUrl='http://new-server:8080';

        $scope.editParty = false;
        $http({
            method: 'GET', 
            url: baseUrl+'/party/all' 
            //async: false
        }).success(function (data) {
            $scope.data = data;
        });


        $scope.getComponentList = function (party) {
            $scope.selectedParty = party;
            $scope.componentRecords = party.components;
        };

        $scope.updateData = function () {
            $http({
                method: 'GET', 
                url: baseUrl+'/party/all' 
                //async: false
            }).success(function (data) {
                $scope.data = data;
                $scope.selectedComponent = {};
            });
        };

        $scope.update = function () {
            var id = $scope.selectedComponent.componentId;
            var payload = $scope.selectedComponent; 
            var url = baseUrl+ '/component/' + id; 
            $http.put(url, payload)
                .success(function (data) {
                    toastr.success("Update Success");
                    //$scope.updateData();
                }).error(function (data) {
                    toastr.error("Cannot Update");
                });
        };

        $scope.save = function () {
            console.log($scope.newparty);
            $scope.selectedComponent.partyId = $scope.selectedParty.partyId;
            $scope.selectedComponent.partyName = $scope.selectedParty.partyName;
            var payload = $scope.selectedComponent; 
            var url = baseUrl+'/component/'; 
            $http.post(url, payload)
                .success(function (data) {
                    toastr.success("Insert Success");
                    $scope.selectedComponent = {};
                    // $scope.updateData();
                }).error(function (data) {
                    toastr.error("Cannot Update");
                });
        };


    });
