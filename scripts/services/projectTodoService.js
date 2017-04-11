(function (app) {

    var urls =
                [  
					{
						Id : 1,
						url : "https://google.com",
						displayName : "google",
						status : "complete"
					},
                    {
						Id : 2,
						displayName : "yahoo",
						url : "https://yahoo.com",
						status : "complete"
					},
                    {
						Id : 3,
						displayName : "bing",
						url : "https://bing.com",
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