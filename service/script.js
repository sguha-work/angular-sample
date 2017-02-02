var myApplication = angular.module("myApplication", []);

myApplication.service('myService', function() {
    this.calculateAndReturnDeductionPercentage = (function(amount) {
        if(amount>=1 && amount<=50) {
            return 3;
        } else if(amount>=51 && amount<=100) {
            return 5;
        } else {
            return 0;
        }
    });
});

myApplication.controller('myController', function($scope, myService) {
    
    (function(){
        $scope.amount = 0;
        $scope.deductedAmount = 0;
        $scope.deductionPercentage = 0;
        $scope.finalAmount = 0;
    })();
    
    $scope.$watch('amount', function() {
        if($scope.amount < 0) {
            $scope.amount = 0;
        }
        if($scope.amount > 100) {
            $scope.amount = 100;
        }
        $scope.deductionPercentage = myService.calculateAndReturnDeductionPercentage($scope.amount);
        $scope.deductedAmount = (($scope.amount * $scope.deductionPercentage)/100);
        $scope.finalAmount = $scope.amount - $scope.deductedAmount;
    });
         
        
});