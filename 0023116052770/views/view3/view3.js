angular.module("myapp").controller("view3Ctrl", function ($scope,$ionicSlideBoxDelegate) {
    $scope.products=[
        {title:"轻柔阳光 碧天涟綺",imgsrc:"images/view8.jpg", text:"现招募30对新人，参与日本浪漫樱花婚纱摄影拍摄。",url:"view3a"},
        {title:"奢华皇室风",imgsrc:"images/view9.jpg", text:"奢华皇室风，疯狂来袭。原价8999元，现价只需3999元。",url:"view3b"},
        {title:"浪漫七夕 福利",imgsrc:"images/view10.jpg", text:"浪漫七夕，给你想不到的福利！十大拍摄场馆，上百套婚纱礼服任你挑选。",url:"view3c"}
    ];
});