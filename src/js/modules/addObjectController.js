(function() {
    "use strict";

    var reviensApp = window.reviensApp || {};

    reviensApp
        .controller('addObjectController', function($scope, $modal) {

            $scope.$on('openModalAddObjectController', function() {
                var modalInstance = $modal.open({
                    templateUrl: 'partials/modals/addObject.html',
                    controller: 'modalAddObjectController'
                });

                modalInstance.result.then(function(selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    // $log.info('Modal dismissed at: ' + new Date());
                });
            });
        });

    reviensApp
        .controller('modalAddObjectController', function ($scope, $modalInstance) {
            $scope.checked = false;

            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.forFriends = function(checked) {
                this.checked = checked;
            };
        });
})();