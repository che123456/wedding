/**
 * Created by hxsd on 2016/8/4.
// */
angular.module("myapp").controller("tourCtrl", function ($scope,$ionicSlideBoxDelegate) {
    $scope.isShow=false;
    $scope.onSlideChanged= function () {
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow=true;
        }else {
            $scope.isShow=false;
        }
    };
 // 获得标题栏的高度
    var barHeight = 0;
    if(document.getElementsByTagName("ion-header-bar")[0]){
        barHeight = document.getElementsByTagName("ion-header-bar")[0].clientHeight;
    }

    // ionScroll的高度，是窗口的总高度-标题栏的高度
    $scope.getHeight = function(){
        return parseInt(parseInt(window.innerHeight)) + "px";
    };

    // ionScroll的宽度
    $scope.getWidth = function(){
        return parseInt(window.innerWidth) + "px";
    };

    // 获得所有页面的高度之和
    $scope.getTotalHeight = function(){
        return parseInt($scope.getHeight() * 3) + "px";
    };

    // 获得arror的left值
    $scope.getArrorLeft = function () {
        return parseInt(window.innerWidth / 2) - 20 + "px";
    };

    // 计算arror的top值
    $scope.getArrorTop = function () {
        return parseInt(window.innerHeight - 100) + "px";
    };
});
//angular.module("myapp",["ionic"]).controller("tourCtrl",function($scope){
//  // 获得标题栏的高度
//  var barHeight = 0;
//  if(document.getElementsByTagName("ion-header-bar")[0]){
//      barHeight = document.getElementsByTagName("ion-header-bar")[0].clientHeight;
//  }
//
//  // ionScroll的高度，是窗口的总高度-标题栏的高度
//  $scope.getHeight = function(){
//      return parseInt(parseInt(window.innerHeight) - barHeight) + "px";
//  };
//
//  // ionScroll的宽度
//  $scope.getWidth = function(){
//      return parseInt(window.innerWidth) + "px";
//  };
//
//  // 获得所有页面的高度之和
//  $scope.getTotalHeight = function(){
//      return parseInt($scope.getHeight() * 3) + "px";
//  };
//
//  // 获得arror的left值
//  $scope.getArrorLeft = function () {
//      return parseInt(window.innerWidth / 2) - 20 + "px";
//  };
//
//  // 计算arror的top值
//  $scope.getArrorTop = function () {
//      return parseInt(window.innerHeight - 100) + "px";
//  };
//});