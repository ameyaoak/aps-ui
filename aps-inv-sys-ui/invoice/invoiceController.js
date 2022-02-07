angular.module('invoiceModule', ['chartModule','toastr' ])
    .controller('invoiceController', function(toastr,$scope,$http,$location) {
        $scope.invoice_fromdata="http://new-server:8080/invoice/all";
        $scope.invoice_headers="Creation Date,Invoice No,Dispatch Id, Inward No, Party,Party DC,Party DC Date, Component,Material,Part No,Process,Qty/Kg,Qty/No,Rate/Kg,Rate/No,Taxable Amt,CGST,SGST,Total Tax,Invoice Amt";
        $scope.invoice_fields="creationDate,invoiceNo,dispatchNo,inwardNo,party,partyDc,partyDate,componentName,material,partNo,process,qtyKgs,qtyNos,rateKg,rateNos,taxableAmount,cgst,sgst,totalTax,total";
        $scope.invoice_button1="Add TC";

        $scope.tcForRec = function() {
            var selectedRec = $scope.report.selected;
            $scope.selectedRecForTc = selectedRec;
            if(selectedRec.testCertificate!=undefined){
               $location.path('/newtc').search({tcNo: selectedRec.testCertificate.tcNo});
            }


        };

        $scope.report = function() {
            var selectedRec = $scope.report.selected;
            $scope.selectedRecForTc = selectedRec;
            if(selectedRec.inwardNo!=undefined) {
               $location.path('/inv').search({dispatchNo: selectedRec.dispatchNo,inwardNo: selectedRec.inwardNo});
            }
        };

        $scope.clear = function (selectedRecord) {
            $scope.report.selected = []
        };

        $scope.delInvoice = function () {
        	var selectedRec = $scope.report.selected;
            $scope.selectedRecForTc = selectedRec;
            if(confirm("Sure you want to delete ?") && selectedRec.testCertificate!=undefined){
            	var url = "http://new-server:8080/invoice/"+selectedRec.invoiceNo; 
                $http.delete(url)
                    .success(function(data) {//delete if success
                    	toastr.success('Invoice Deleted');
                    }).error(function(data){
                        toastr.error('Invoice Cannot Be Deleted');
                    });
            }
        };

    });