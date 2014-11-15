(function() {
    "use strict";

    var reviensApp = window.reviensApp || {};

    reviensApp
        .controller('objectsController', function($scope, $translate, $translatePartialLoader, TagService) {
            $scope.pageClass = 'page-objects';

            $translatePartialLoader.addPart('objects');
            $translatePartialLoader.addPart('tags');
            $translate.refresh();

            TagService.getData()
                .then(function(data) {
                    $scope.items = data;

                    var arr = [];
                    angular.forEach(data, function(value) {
                        arr.push(value);
                    });

                    $translate(arr).then(function (translations) {

                        $scope.selectedOption = translations[Object.keys(translations)[0]];
                        $scope.items = translations;
                    });
                });


            $scope.openModal = function () {
                $scope.$broadcast('openModalAddObjectController', {});
            };

            $scope.items = [];

            $scope.setSelectedOption = function(str) {
                $scope.selectedOption = str;
            };

            $scope.status = {
                isopen: false
            };

            $scope.toggled = function() {

            };

            $scope.objects = [
                {
                    img: '/fake/img/fake-img-1.jpg',
                    date: '14 septembre',
                    title: 'Lunettes Ray-Ban',
                    friends: 'Gilles F.'
                },
                {
                    img: '/fake/img/fake-img-1.jpg',
                    date: 'test 2',
                    title: 'test 2',
                    friends: 'test 2'
                },
                {
                    img: '/fake/img/fake-img-1.jpg',
                    date: 'test 3',
                    title: 'test 3',
                    friends: 'test 3'
                },
                {
                    img: '/fake/img/fake-img-1.jpg',
                    date: 'test 4',
                    title: 'test 4',
                    friends: 'test 4'
                }
            ];
        })
        .directive('objectList', function() {
            return {
                templateUrl: 'partials/directives/object-list.html',
                /*params : $scope, $element, $attr */
                link : function(){

                }
            };
        })
        .directive('objectBlock', function() {
            return {
                templateUrl: 'partials/directives/object-block.html'
            };
        });
})();