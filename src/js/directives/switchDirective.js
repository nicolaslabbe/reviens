(function() {
    "use strict";

    var reviensApp = reviensApp || {};

    reviensApp
        .directive('switch', function() {
            return {
                scope: {},
                restrict: 'AE',
                templateUrl: 'partials/directives/switch.html',
                /*params : $scope, $element, $attr */
                link: function (scope, element) {
                    element.find('input').bind('change', function() {
                        scope.changeAction('test');
                    });
                }
            };
        });
})();