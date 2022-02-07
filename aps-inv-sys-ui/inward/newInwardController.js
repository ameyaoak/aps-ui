angular.module('newInwardModule', ['toastr' ])
    .controller('newInwardController', function(toastr,$scope,$http) {
        var baseUrl='http://new-server:8080';
        var inwardEntry={};
        $http({
            method: 'GET', 
            url: baseUrl+'/party/all' 
            //async: false
        }).success(function(data) {
            $scope.data = data;
        });


        $scope.getComponentList = function(party) {
            $scope.selectedParty=party;
            $scope.componentRecords=party.components;
        };

        $scope.save = function() {
            inwardEntry.component=$scope.selectedComponent;
            inwardEntry.qtyKgs=$scope.selectedComponent.qtyKgs;
            inwardEntry.qtyNos=$scope.selectedComponent.qtyNos;
            inwardEntry.inspectedQty=$scope.selectedComponent.inspectedQty;
            inwardEntry.damageQty=$scope.selectedComponent.damageQty;
            inwardEntry.inspectedDistortation=$scope.selectedComponent.inspectedDistortation;
            inwardEntry.finish=$scope.selectedComponent.finish;
            inwardEntry.checkedBy=$scope.selectedComponent.checkedBy;
            inwardEntry.remark=$scope.selectedComponent.remark;
            inwardEntry.partyDc=$scope.selectedComponent.partyDc;
            inwardEntry.partyDate=$scope.selectedComponent.partyDate;
            inwardEntry.poNo=$scope.selectedComponent.poNo;
            inwardEntry.poDate=$scope.selectedComponent.poDate;
            saveInward(inwardEntry);
        };

        saveInward = function(inwardEntry) { 
            var url = baseUrl+'/inward'; 
            $http.post(url,inwardEntry)
                .success(function(data) {//delete if success
                    toastr.success('Added Inward');
                    $scope.exportDataVariable = data;
                    $scope.selectedComponent={};
                }).error(function(data){
                toastr.error('Error in adding Inward');
            });
        };

    });