
/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("view3Ctrl", function ($scope,$http,$ionicLoading) {
   var url="http://wthrcdn.etouch.cn/weather_mini?city=重庆";
    $ionicLoading.show();
    $http.get(url).success(function (data) {
        $scope.weather=data;
        $ionicLoading.hide();
    }).error(function () {
        $ionicLoading.show({
            template:"无法获取天气数据",
            duration:3000
        })
    });
});
