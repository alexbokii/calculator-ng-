var calculator = angular.module('calculator', []);

calculator.controller ('calculatorController', function($scope) {
    $scope.show = 0;
  
    var expression = {
        'firstNum': '',
        'secondNum': '',
        'sign': ''
    };

    $scope.getExp = function(num) {
        if(expression['sign'] == '') {
            expression['firstNum'] = expression['firstNum'] +  num;
            $scope.show = expression['firstNum'];
        }
        else {
            expression['secondNum'] = expression['secondNum'] + num;
            $scope.show = expression['secondNum'];
        }
    }

    $scope.calc = function(sym) {
        if(expression['sign'] != '' && expression['secondNum'] != '') {
           var newFirst = calculate(expression);
            expression = cleanExpression();
            expression['firstNum'] = newFirst;
        }
        expression['sign'] = sym;
        $scope.show = expression['sign'];
    }

    $scope.count = function() {
        $scope.show = calculate(expression);
        expression = cleanExpression();
        expression['firstNum'] = $scope.show;
    }

    $scope.reset = function() {
        expression = cleanExpression();
        $scope.show = 0;
    }
});

function calculate(expression) {    
    if(expression['firstNum'] == '') {
        expression['firstNum'] = 0;
    }
    if(expression['secondNum'] == '') {
        expression['secondNum'] = expression['firstNum'];
    }

    expression['firstNum'] = parseFloat(expression['firstNum']);
    expression['secondNum'] = parseFloat(expression['secondNum']);

    var result;
    if(expression['sign'] == "+") {
        result = expression['firstNum'] + expression['secondNum'];
    }
    else if(expression['sign'] == "-") {
        result = expression['firstNum'] - expression['secondNum'];
    }
    else if(expression['sign'] == "*") {
        result = expression['firstNum'] * expression['secondNum'];
    }
    else if(expression['sign'] == "/") {
        result = expression['firstNum'] / expression['secondNum'];
    }
    return result;
}

function cleanExpression() {
    return {
        'firstNum': '',
        'secondNum': '',
        'sign': ''
    };
}