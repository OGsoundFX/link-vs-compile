function displayResult () {
    return {
        restrict: 'A',
        // complile: function ($element, $attrs) {
        //     $element.addClass("red");
        //     console.log($element);
        // }

        // When I click on the button it doesn't change the attrs
        // link: function ($scope, $element, $attrs) {
        //     console.log($attrs.result.length);
        //     $element.addClass($attrs.result);
        // }

        // the $observe directive 
        link: function ($scope, $element, $attrs) {
            $attrs.$observe('result', (value) => {
                $element.removeClass("rwin")
                $element.removeClass("lose")
                $element.removeClass("draw")
                $element.addClass(value);
            });
        }
    };
};

angular
    .module('app')
    .directive('displayResult', displayResult);