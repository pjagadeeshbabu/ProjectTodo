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
							"4.2-cu ft capacity offers tremendous tub space, allowing you to finish more laundry in less time",
							"8 wash cycles, including one for active wear, allow you to customize your cycle without feeling overwhelmed",
							"ENERGY STAR® certified products help you save money on utility bills without sacrificing performance, style or comfort"
						]
					},
					{
						Id : 3,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer with Steam",
						url : "images/image3.jpg",
						price : "899.00",
						features : [
							"Smart Care lets you troubleshoot with your smartphone",
							"Self Clean+ keeps your washer fresh without using harsh chemicals",
							"VRT Technology reduces noise and vibration"
						]
					},
                    {
						Id : 4,
						modelName : "Whirlpool 4.5-cu ft High-Efficiency Stackable Front-Load Washer Steam",
						url : "images/image4.jpg",
						price : "649.00",
						features : [
							"Skip adding detergent to every load with LOAD & GO bulk dispenser",
							"The Wash & Dry cycle dries without having to use the dryer",
							"The 12-hour FANFRESH option keeps clothes in the washer fresh"
						]
					},
                    {
						Id : 5,
						modelName : "LG TWINWASH Compatible4.5-cu ft High-EfficiencyStackable Front-Load",
						url : "images/image5.jpg",
						price : "670.00",
						features : [
							"VRT Technology reduces noise and vibration",
							"Self Clean+ keeps your washer fresh without using harsh chemicals",
							"Smart Care lets you troubleshoot with your smartphone"
						]
					},
					{
						Id : 6,
						modelName : "Maytag Fresh Hold 4.5-cu ft High-Efficiency Stackable Front-Load Washer Steam",
						url : "images/image6.jpg",
						price : "519.00",
						features : [
							"The POWERWASH cycle helps remove everyday tough stains",
							"The FRESH HOLD option keeps clothes fresh with an internal fan",
							"Power out tought stains with the STEAM FOR STAINS option"
						]
					},
					{
						Id : 7,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White) ENERGY STAR",
						url : "images/image1.jpg",
						price : "790.00",
						features : [
							"Smart Care lets you troubleshoot with your smartphone",
							"Self Clean+ keeps your washer fresh without using harsh chemicals",
							"VRT Technology reduces noise and vibration"
						]
					},
					{
						Id : 8,
						modelName : "Samsung 4.2-cu ft High-Efficiency Stackable Front-Load Washer (White)",
						url : "images/image2.jpg",
						price : "599.00",
						features : [
							"Power out tought stains with the STEAM FOR STAINS option",
							"The POWERWASH cycle helps remove everyday tough stains",
							"The FRESH HOLD option keeps clothes fresh with an internal fan"
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