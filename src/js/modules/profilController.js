(function() {
    "use strict";

    var reviensApp = reviensApp || {};

    reviensApp
        .controller('profilController', function($scope, $translate, $translatePartialLoader) {
            $scope.pageClass = 'page-profil';

            $translatePartialLoader.addPart('profil');
            $translate.refresh();
        });
})();