(function (app) {

    var items =
                [  
					{
						Id : 1,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White) ENERGY STAR",
						url : "images/image1.jpg",
						price : "719.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
					{
						Id : 2,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White)",
						url : "images/image2.jpg",
						price : "599.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
					{
						Id : 3,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer with Steam",
						url : "images/image3.jpg",
						price : "899.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
                    {
						Id : 4,
						modelName : "Whirlpool 4.5-cu ft High-Efficiency Stackable Front-Load Washer Steam",
						url : "images/image4.jpg",
						price : "649.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
                    {
						Id : 5,
						modelName : "LG TWINWASH Compatible4.5-cu ft High-EfficiencyStackable Front-Load",
						url : "images/image5.jpg",
						price : "670.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
					{
						Id : 6,
						modelName : "Maytag Fresh Hold 4.5-cu ft High-Efficiency Stackable Front-Load Washer Steam",
						url : "images/image6.jpg",
						price : "519.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
					{
						Id : 7,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White) ENERGY STAR",
						url : "images/image1.jpg",
						price : "790.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					},
					{
						Id : 8,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White)",
						url : "images/image2.jpg",
						price : "599.00",
						features : [
							"ENERGY STAR® certified",
							"Wash cycles include a ColorLast™ cycle",
							"EcoBoost™ option uses lower water temperatures and increased wash action"
						]
					}
                ];
				
	var projectTodoService = function () {
        var projectTodoFactory = {};

        projectTodoFactory.getItems = function () {
            return items;
        };

        return projectTodoFactory;
    };
    app.factory("projectTodoService", projectTodoService);

}(angular.module("projectTodoapp")));