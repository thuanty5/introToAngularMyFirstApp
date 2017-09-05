
// angular.module("todos").controller("todoCtrl", function($scope){

// 	$scope.todo = [
// 		"create a todo list",
// 		"update todo list",
// 		"remove todos",
// 		"show completed todos"
// 	];

// 	$scope.addTodo = function(){
// 		$scope.todos.push($scope.newTodo);
// 	}


// });

angular.module('todos').controller('todoCtrl', function($scope) {
	
	 $scope.todos = [
	   'Create a todo List',
	   'Update the todo List',
	   'Remove Todos',
	   'Show Completed Todos'
	 ];

	 $scope.addTodo = function() {
	   $scope.todos.push($scope.newTodo);
	   $scope.newTodo = '';
	 };

	 $scope.removeTodo = function(todo){
	 	$scope.todos = $scope.todos.filter(function(cur){
	 		return cur !== todo;
	 	});
	 }

	 
});