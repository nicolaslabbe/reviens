reviensApp.controller('HomeController', function($scope, $translate, $translatePartialLoader) {
    $scope.pageClass = 'page-home';

    $translatePartialLoader.addPart('home');
    $translate.refresh();
});