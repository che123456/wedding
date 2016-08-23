angular.module("myapp").controller("view2Ctrl", function ($scope,$ionicSlideBoxDelegate) {
    $scope.products=[
        {M:"骑士爱之风范",
            imgsrc:[
                {url:"images/view0.jpg"},
                {url:"images/view1_2.jpg"},
                {url:"images/view04.jpg"}
            ]},
        {M:"南海的浪漫爱情",
            imgsrc:[
                {url:"images/view07.jpg"},
                {url:"images/5.jpg"},
                {url:"images/view06.jpg"}
            ]}
    ];
    $scope.prds= {M:"浪漫诠释百万新娘",
        imgsrc:[
        {url:"images/tour.jpg"},
        {url:"images/viewa_2.jpg"}
    ]}


});