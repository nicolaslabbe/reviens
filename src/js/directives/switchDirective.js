(function() {
    "use strict";

    var reviensApp = window.reviensApp || {};

    reviensApp
        .directive('switch', function() {
            return {
                scope: {
                    change: "&"
                },
                restrict: 'AE',
                templateUrl: 'partials/directives/switch.html',
                /*params : $scope, $element, $attr */
                link: function (scope, element, $attr) {
                    element.find('input')[0].checked = ($attr.checked === 'true') || false;
                    element.find('input').bind('change', function() {
                        scope.change({checked: this.checked});
                    });
                }
            };
        });
})(window);