(function() {
    "use strict";

    var reviensApp = reviensApp || {};

    reviensApp
        .directive('picture', function() {
            return {
                templateUrl: 'partials/directives/picture.html',
                /*params : $scope, $element, $attr */
                link : function() {

                }
            };
        });
})();