((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.user', {
            url:'users/user/:userId',
            template: '<user></user>'
        })
    }])
})(angular.module('app.user', []))
