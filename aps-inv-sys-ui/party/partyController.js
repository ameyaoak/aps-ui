angular.module('partyModule', ['toastr'])
    .controller('partyController', function (toastr, $scope, $http) {

        var baseUrl='http://new-server:8080';

        $scope.editParty = false;
        $http({
            method: 'GET', 
            url: baseUrl+'/party/all' 
            //async: false
        }).success(function (data) {
            $scope.parties = data;


            $scope.clearFields = function () {
                $scope.parties = '';
            };

            $scope.update = function () {
                var id = $scope.party.selectedOption.partyId;
                var payload = $scope.party.selectedOption; 
                var url = baseUrl+'/party/' + id; 
                $http.put(url, payload)
                    .success(function (data) {
                        toastr.success('Party Updated Successfully');
                    }).error(function (data) {
                        toastr.error("Cannot Update Party");
                    });
            };

            $scope.save = function () {
                console.log($scope.party.selectedOption); 
                var payload = $scope.party.selectedOption;
                var url = baseUrl+'/party/'; 
                $http.post(url, payload)
                    .success(function (data) {
                        toastr.success("Party Added Successfully");
                    }).error(function (data) {
                        toastr.error("Cannot Save Party");
                    });
            };


        }).error(function (data) {
            toastr.success('Cannot Read Party');
        });

    }) ;