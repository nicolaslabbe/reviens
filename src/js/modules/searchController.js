(function() {
    "use strict";

    var reviensApp = reviensApp || {};

    reviensApp
        .controller('searchController', function($scope, $translate, $translatePartialLoader) {
        $scope.pageClass = 'page-search';

        $translatePartialLoader.addPart('search');
        $translate.refresh();
    });
})();