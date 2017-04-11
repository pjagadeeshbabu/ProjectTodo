(function (app) {
    var projectToDoController = function ($scope, projectTodoService, $window) {
		
		$scope.Title = "Project Todo";	
		$scope.URLs = projectTodoService.getURLs();
		
		$scope.openPage = function(url){
            $window.open(url, '_blank');
        };
    }
	app.controller("projectToDoController", ["$scope", "projectTodoService", "$window", projectToDoController]);
}(angular.module("projectTodoapp")));