angular.module("todoListApp") //do not add and empty array as the 2nd param, since we do not want to create a new module, instead call the already existing one
.directive("helloWorld", function(){  //attached to the existing module a new directive; 1st param - name, 2nd - call back function
	return{   //returns an Object which is our directive
		template: "This is the Hello World Directive" //now this helloWorld can be used as a tag/attr in our html
	};
});