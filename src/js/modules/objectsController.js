reviensApp.controller('objectsController', function($scope, $translate, $translatePartialLoader) {
    $scope.pageClass = 'page-objects';

    $translatePartialLoader.addPart('objects');
    $translate.refresh();
});