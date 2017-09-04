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
  $scope.removeTodo = function(todo) {
    $scope.todos = $scope.todos.filter(function(cur) {
      return cur !== todo;
    });
  };
  $scope.startEdit = function(todo, indx) {
    $scope.editedTodo = todo;
    $scope.index = indx;
    $scope.editing = true;
  };
  $scope.modifyTodo = function(todo) {
    $scope.todos[$scope.index] = todo;
    $scope.editing = false;
  };
});
