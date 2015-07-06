var calculator = angular.module('calculator', []);

calculator.controller ('calculatorController', function($scope) {
    $scope.firstNum = 0;
    $scope.secondNum = 0;
    $scope.sym = 'undefined';
    $scope.result;
    $scope.show = 0;


   $scope.getExp = function(num) {
    if($scope.sym == 'undefined' && $scope.firstNum != 0) {
        $scope.firstNum = $scope.firstNum + '' + num + '';
        $scope.show = $scope.firstNum;
    }
    else if($scope.sym == 'undefined' && $scope.firstNum == 0) {
        $scope.firstNum = '' + num + '';
        $scope.show = $scope.firstNum;
    }
    else if ($scope.sym != 'undefined' && $scope.secondNum != 0) {
         $scope.secondNum = $scope.secondNum + '' + num + '';
         $scope.show = $scope.secondNum;
    }
    else {
       $scope.secondNum = '' + num + '';
       $scope.show = $scope.secondNum;
    }
   };

   $scope.calc = function(sym) {
    if($scope.sym == 'undefined' && $scope.firstNum != 0) {
        $scope.sym = sym;
    }
    $scope.show = $scope.sym;
   };

   $scope.count = function() {
    $scope.firstNum = parseFloat($scope.firstNum);
    $scope.secondNum = parseFloat($scope.secondNum);
    
    if($scope.sym == '+') {
        $scope.result = $scope.firstNum + $scope.secondNum;
    }

    else if($scope.sym == '-') {
        $scope.result = $scope.firstNum - $scope.secondNum;
    }

    else if($scope.sym == '*') {
        $scope.result = $scope.firstNum * $scope.secondNum;
    }

    else {
        $scope.result = $scope.firstNum / $scope.secondNum;
    }

    $scope.show = $scope.result;

    
    $scope.firstNum = $scope.result;
    $scope.secondNum = 0;
    $scope.sym = 'undefined'
   }

   $scope.reset = function() {
    $scope.firstNum = 0;
    $scope.secondNum = 0;
    $scope.sym = 'undefined';
    $scope.result = 0;
    $scope.show = 0;
   }
});