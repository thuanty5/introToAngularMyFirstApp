angular.module('myApp').controller('myCtrl', function($scope, $timeout){
  $scope.bool = false;
  $scope.todos = ['make a todo list', "display my todos", "create new Todos", "remove todos", "strike out"]
  $scope.addNewTodo = function(newTodo){
    $scope.todos.push(newTodo)
    $scope.newTodo = ""
  }
  $scope.removeTodo = function (index){
    $scope.todos.splice(index, 1)
  }

})
