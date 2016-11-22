((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.user', {
            url:'/user/:position',
            template: '<user></user>'
        })
    }])
})(angular.module('app.user', []))
