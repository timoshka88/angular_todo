angular.module("todoListApp", [])
.controller("mainCtrl", function($scope, dataService){ //scope - area of work of the controller
	//adding dataService as a param we create the dependancy as needed in order for the service to be called
	// $scope.helloConsole = dataService.helloConsole;
	$scope.helloWorld = function(){
		console.log("Hello there!!!!! I'm the Main Ctrl")
	};
	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});

})
.service('dataService', function($http){
	this.helloConsole = function(){ console.log("Hello Console this is Setvice")};

	this.getTodos = function(callback){
		$http.get('mock/todos.json') //takes the url as a first param
		.then(callback)
	};

	this.deleteTodo = function(todo){
		console.log('The' + todo.name + 'has been deleted')
	};

	this.saveTodo = function(todo){
		console.log(('The' + todo.name + 'has been saved'))
	};
});