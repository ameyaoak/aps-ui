	// create the module and name it scotchApp
	var app = angular.module('apsApp', ['ngRoute','objectTable','loginModule','chartModule','inwardModule','mainModule','dispatchModule','invoiceModule','newInwardModule','newTcModule','tcTableModule','partyModule','componentModule','chartModule','underscore','toastr']);
	// configure our routes
  
 
	app.config(function($routeProvider,$locationProvider) {
	  	$routeProvider  
			.when('/', {
				templateUrl : 'login/welcome.html',
				controller  : 'loginController'
			})  
			.when('/new', {
				templateUrl : 'inward/newInwardForm.html',
				controller  : 'newInwardController'
			})
			.when('/newtc', {
				templateUrl : 'inward/newTcForm.html',
				controller  : 'newTcController'
			})
			.when('/login', {
				templateUrl : 'login/logout.html',
				controller  : 'loginController'
			})
			.when('/dispatch', {
				templateUrl : 'dispatch/dispatchDisplay.html', 
				controller  : 'dispatchController'
			})
			.when('/inward', {
				templateUrl : 'inward/inwardDisplay.html',
				controller  : 'inwardController'
			}) 
			.when('/invoice', { 
				templateUrl : 'invoice/invoiceDisplay.html',
				controller  : 'invoiceController'
			})
			.when('/inv', {
				templateUrl : 'report/inv.html',
				controller  : 'mainController'
			})
			.when('/tc', {
				templateUrl : 'report/tr.html',
				controller  : 'mainController'
			})
			.when('/party', { 
				templateUrl : 'party/partyInput.html',
				controller  : 'partyController'  
			})
			.when('/component', { 
				templateUrl : 'component/componentInput.html',
				controller  : 'componentControllers'  
			})
			.when('/report', { 
				templateUrl : 'report/report.html',
				controller  : 'mainController'  
			})
			 .otherwise({ redirectTo: 'login/welcome.html' });
	});

 
