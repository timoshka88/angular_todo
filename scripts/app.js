angular.module("todoListApp", [])
.controller("mainCtrl", function($scope){ //scope - area of work of the controller
	$scope.helloWorld = function(){
		console.log("Hello there!!!!! I'm the Main Ctrl")
	};

	$scope.todos = [
		{"name" : "clean the house"},
		{"name" : "call XYZ"},
		{"name" : "enjoy the sun"},
		{"name" : "enjoy the sun again while it's not raininf"}
	]
});