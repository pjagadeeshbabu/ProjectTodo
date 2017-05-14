(function (app) {
    var projectToDoController = function ($scope, projectTodoService, $window) {
		
		$scope.Title = "Project Todo";	
		$scope.items = projectTodoService.getItems();
		$scope.selectedItems = [];
		
		$scope.masterItem = $scope.items[0];
		
		$scope.updateMaster = function(item){
			$scope.masterItem = item
		}
		
		$scope.addToCart = function(item){
			$scope.selectedItems.push(item);
			alert("item added successfuly to cart");
			console.log("Selected Items  :  ");
			console.log($scope.selectedItems);
		}
    }
	app.controller("projectToDoController", ["$scope", "projectTodoService", "$window", projectToDoController]);
}(angular.module("projectTodoapp")));