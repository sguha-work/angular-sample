var myApplication = angular.module("myApplication", []);

myApplication.controller('myController', function($scope) {
        $scope.myVar = 0;
        window.setInterval(function() {
            $scope.myVar += 1;
            $scope.$apply();
        }, 500);
});