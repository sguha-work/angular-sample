var myApplication = angular.module("myApplication", []);

myApplication.controller('myController', function($scope, $interval) {
        $scope.myVar = 0;
        $interval(function() {
            $scope.myVar += 1;
        }, 500);
});