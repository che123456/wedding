angular.module("myapp").controller("view2Ctrl", function ($scope,$ionicSlideBoxDelegate) {
    $scope.products=[
    	{M:"8月客片展示",
			ui:"view2a",
    	imgsrc:[
    		{url:"images/view8.jpg"},
    		{url:"images/view9.jpg"},
    		{url:"images/view10.jpg"}
    	]},
    	{M:"7月客片展示",
			ui:"view2b",
    	imgsrc:[
    		{url:"images/view11.jpg"},
    		{url:"images/view12.jpg"},
    		{url:"images/view06.jpg"}
    	]},
    	{M:"6月客片展示",
			ui:"view2c",
    	imgsrc:[
    		{url:"images/view13.jpg"},
    		{url:"images/view14.jpg"},
    		{url:"images/view15.jpg"}
    	]},
    	{M:"5月客片展示",
			ui:"view2d",
    	imgsrc:[
    		{url:"images/view16.jpg"},
    		{url:"images/view17.jpg"},
    		{url:"images/view18.jpg"}
    	]}
    ]
    	
   
});