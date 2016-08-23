var myapp=angular.module("myapp",["ionic"]);
myapp.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
	$ionicConfigProvider.backButton.text("");
	$ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("home",{url:"/home",templateUrl:"views/home/home.html"});
    $stateProvider.state("view1",{url:"/view1",templateUrl:"views/view1/view1.html"});
    $stateProvider.state("view1a",{url:"/view1a",templateUrl:"views/view1/view1a.html"});
    $stateProvider.state("view1b",{url:"/view1b",templateUrl:"views/view1/view1b.html"});
    $stateProvider.state("view1c",{url:"/view1c",templateUrl:"views/view1/view1c.html"});
    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html",controller:"tourCtrl"});
    $stateProvider.state("view2",{url:"/view2",templateUrl:"views/view2/view2.html",controller:"view2Ctrl"});
    $stateProvider.state("view2a",{url:"/view2a",templateUrl:"views/view2/view2a.html",controller:"view2Ctrl"});
    $stateProvider.state("view2b",{url:"/view2b",templateUrl:"views/view2/view2b.html",controller:"view2Ctrl"});
    $stateProvider.state("view2c",{url:"/view2c",templateUrl:"views/view2/view2c.html",controller:"view2Ctrl"});
    $stateProvider.state("view2d",{url:"/view2d",templateUrl:"views/view2/view2d.html",controller:"view2Ctrl"});
    $stateProvider.state("view3",{url:"/view3",templateUrl:"views/view3/view3.html",controller:"view3Ctrl"});
    $stateProvider.state("view3a",{url:"/view3a",templateUrl:"views/view3/view3a.html"});
    $stateProvider.state("view3b",{url:"/view3b",templateUrl:"views/view3/view3b.html"});
    $stateProvider.state("view3c",{url:"/view3c",templateUrl:"views/view3/view3c.html"});
    $stateProvider.state("view4",{url:"/view4",templateUrl:"views/view4/view4.html"});

    $urlRouterProvider.otherwise("tour");
});