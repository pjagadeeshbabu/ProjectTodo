(function (app) {

    var urls =
                [  
					{
						Id : 1,
						displayName : "Project",
						url : "",
						status : "complete"
					},
					{
						Id : 2,
						displayName : "Controllers",
						url : "tree/master/scripts/controllers",
						status : "complete"
					},
					{
						Id : 3,
						displayName : "Css",
						url : "tree/master/css",
						status : "complete"
					},
                    {
						Id : 4,
						displayName : "Services",
						url : "tree/master/scripts/services",
						status : "complete"
					},
                    {
						Id : 5,
						displayName : "Scripts",
						url : "tree/master/scripts",
						status : "incomplete"
					}
                ];
				
	var projectTodoService = function () {
        var projectTodoFactory = {};

        projectTodoFactory.getURLs = function () {
            return urls;
        };

        return projectTodoFactory;
    };
    app.factory("projectTodoService", projectTodoService);

}(angular.module("projectTodoapp")));