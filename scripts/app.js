angular.module("todoListApp", [])
.controller("mainCtrl", function($scope, dataService){ //scope - area of work of the controller
	//adding dataService as a param we create the dependancy as needed in order for the service to be called
	$scope.helloConsole = dataService.helloConsole;
	$scope.helloWorld = function(){
		console.log("Hello there!!!!! I'm the Main Ctrl")
	};

})
.service('dataService', function(){
	this.helloConsole = function(){ console.log("Hello Console this is Setvice")}
});