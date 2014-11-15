(function() {
    "use strict";

    var reviensApp = window.reviensApp || {};

    reviensApp
        .controller('friendsController', function($scope, $translate, $translatePartialLoader) {
            $scope.pageClass = 'page-friends';

            $translatePartialLoader.addPart('friends');
            $translate.refresh();
        });
})();