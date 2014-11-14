/*exported tagService*/
var tagService = (function() {
    "use strict";

    var tagService = angular.module('tagService', []);

    tagService
        .factory('TagService', function($http) {
            this.json = null;

            return {
                getData: function() {
                    var p = new Promise(function(resolve) {
                        if(!this.json) {
                            var result = $http.get('/config/tags.json');
                            result.success(function(data) {
                                this.json = data;
                                resolve(this.json);
                            }.bind(this));
                        }else {
                            resolve(this.json);
                        }
                    }.bind(this));

                    return p;
                }
            };
        });

    return tagService;
})();