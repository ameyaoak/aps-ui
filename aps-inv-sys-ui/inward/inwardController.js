angular.module('inwardModule', ['toastr' ])
    .controller('inwardController', function(toastr,$scope,$http) {
        $scope.inward_fromdata="http://new-server:8080/inward/displayAll";
        $scope.inward_headers="Creation Date,Inward No, Party,Party DC,Party DC Date, Component,Material,Part No,Process,Core Hd, Surface Hd, Case Depth, Micro, Distortation, Layer Thickness, Apperance,As Quench Hd, Hd After Tempering,Partial Decarb, Wtt,Qty Kg,Qty No,Rate Kg,Rate No,Inspection";
        $scope.inward_fields="creationDate,inwardNo,party,partyDc,partyDate,component,material,partNo,process,coreHd, surfaceHd, caseDepth, micro, distortation, layerThickness, apperance,asQuenchHd,hdAfterTempering,partialDecarb,wtt,qtyKgs,qtyNos,rateKg,rateNos,remark";
        $scope.inward_button1="Dispatch Jobs";

        var baseUrl='http://new-server:8080';


        $scope.ok = function() {

            var selectedRec = $scope.report.selected;
            var actualRec;
            if(selectedRec.inwardNo!=undefined) {
                compareWithActualSelectedRecord(selectedRec);

            }
        };

        compareWithActualSelectedRecord = function(selectedRec)
        {
            var id = selectedRec.inwardNo; 
            var url = baseUrl+'/inward/'+id; 
            $http.get(url)
                .success(function(data) {
                    if(selectedRec.qtyKgs<= data.qtyKgs && selectedRec.qtyNos<=data.qtyNos){
                        insertRecordInDispatchAsSingle(selectedRec);
                        var newQtyKgs = data.qtyKgs-selectedRec.qtyKgs;
                        var newQtyNos = data.qtyNos-selectedRec.qtyNos;
                        data.qtyKgs=newQtyKgs;
                        data.qtyNos=newQtyNos;

                        updateInwardWithBalanceQty(data);
                        toastr.success('Dispatched Successfully');


                        //toastr.success('Update Success');
                    }
                    else{
                        toastr.error("Qty Error in inward");
                    }
                    //$scope.parties[id-1]=data;
                }).error(function(data){
                    toastr.error("Cannot Update quantity error");
                });
        };

        updateInwardWithBalanceQty = function(data)
        {  
            var url = baseUrl+'/inward/'; 
            $http.put(url,data)
                .success(function(data) {
                    //toastr.success('Qty Update Success in inward');
                    updateDataGrid();
                }).error(function(data){
                    toastr.error("Cannot Update Qty in inward");
                    updateDataGrid();
                });
            updateDataGrid();
        };


        insertRecordInDispatchAsSingle = function(rec) {
            var inwardRecord = {};
            inwardRecord.party=rec.party;
            inwardRecord.component=rec.component;
            inwardRecord.material = rec.material;
            inwardRecord.inwardNo=rec.inwardNo;
            inwardRecord.qtyKgs=rec.qtyKgs;
            inwardRecord.qtyNos=rec.qtyNos;
            inwardRecord.rateKg=rec.rateKg;
            inwardRecord.rateNos=rec.rateNos;
            inwardRecord.total = rec.qtyKgs * rec.rateKg + rec.qtyNos * rec.rateNos; 
            var url=baseUrl+"/dispatch"; 
            $http.post(url,inwardRecord)
                .success(function(data) {//delete if success
                    updateDataGrid();
                    // toastr.success('Update Success');
                    $scope.report.selected=[];
                }).error(function(data){//dont if no success
                    updateDataGrid();
                    toastr.error("Cannot Update : Error in quantity entered for inward : "+rec.inwardNo);
                    $scope.report.selected=[];
                });
        };

        updateDataGrid = function() { 
            
            $http.get(baseUrl+'/inward/displayAll') 
                .success(function(datas) {
                    $scope.exportDataVariable = datas;

                }).error(function(datas){
                });
        };

        $scope.clear = function(selectedRecord) {
            $scope.report.selected=[]
        };

    });