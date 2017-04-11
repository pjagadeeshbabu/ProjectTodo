(function (app) {
    var projectToDoController = function ($scope, projectTodoService, $window) {
		
		$scope.Title = "Project Todo";	
		$scope.URLs = projectTodoService.getURLs();
		$scope.repository = "https://github.com/pjagadeeshbabu/ProjectTodo/";
		
		$scope.openPage = function(url){
			var targetURL = $scope.repository + url;
            $window.open(targetURL, '_blank');
        };
    }
	app.controller("projectToDoController", ["$scope", "projectTodoService", "$window", projectToDoController]);
}(angular.module("projectTodoapp")));