function displayResult () {
    return {
        restrict: 'A',
        // complile: function ($element, $attrs) {
        //     $element.addClass("red");
        //     console.log($element);
        // }

        // When I click on the button it doesn't change the attrs
        link: function ($scope, $element, $attrs) {
            console.log($attrs.result.length);
            $element.addClass($attrs.result);
        }
    };
};

angular
    .module('app')
    .directive('displayResult', displayResult);