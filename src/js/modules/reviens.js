var reviensApp = angular.module('reviensApp', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        alert('test');
        $stateProvider
            .state('home', {
                controller: 'HomeController',
                url: '/home',
                templateUrl: 'partials/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    });