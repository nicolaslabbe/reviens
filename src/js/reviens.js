/*exported reviensApp*/
var reviensApp = (function(){
    "use strict";

    var app = angular.module('reviensApp', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'pascalprecht.translate',
            'tagService'
        ])
        .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: '/translations/{lang}/{part}.json'
            });
            $translateProvider.preferredLanguage('fr-FR');

            $stateProvider
                .state('home', {
                    controller: 'HomeController',
                    url: '/home',
                    templateUrl: 'partials/home.html'
                })
                .state('profil', {
                    controller: 'profilController',
                    url: '/profil',
                    templateUrl: 'partials/profil.html'
                })
                .state('objects', {
                    controller: 'objectsController',
                    url: '/objects',
                    templateUrl: 'partials/objects.html'
                })
                .state('friends', {
                    controller: 'friendsController',
                    url: '/friends',
                    templateUrl: 'partials/friends.html'
                })
                .state('notifications', {
                    controller: 'notificationsController',
                    url: '/notifications',
                    templateUrl: 'partials/notifications.html'
                })
                .state('search', {
                    controller: 'searchController',
                    url: '/search',
                    templateUrl: 'partials/search.html'
                });

            $urlRouterProvider.otherwise('/home');
        });

    return app;
})();