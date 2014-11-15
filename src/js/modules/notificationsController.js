(function() {
    "use strict";

    var reviensApp = window.reviensApp || {};

    reviensApp
        .controller('notificationsController', function($scope, $translate, $translatePartialLoader) {
        $scope.pageClass = 'page-notifications';

        $translatePartialLoader.addPart('notifications');
        $translate.refresh();
    });
})();