var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        if (window.cordova !== undefined) {
            console.log('Cordova found, wating for device.');
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        } else {
            console.log('Cordova not found, booting application');
            window.addEventListener('load', this.onDeviceReady.bind(this), false);
            // this.receivedEvent('deviceready');
        }
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        angular.element(document).ready(function() {

            angular.bootstrap(document, ['reviensApp']);
        });
    }
};