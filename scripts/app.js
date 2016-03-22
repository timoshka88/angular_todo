angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){ //scope - area of work of the controller
	$scope.helloWorld = function(){
		console.log("Hello there!!!!! I'm the Main Ctrl")
	}
});