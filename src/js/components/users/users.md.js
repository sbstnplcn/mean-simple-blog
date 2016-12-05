((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.users', {
            url:'/users',
            template: '<users></users>'
        })
    }])
})(angular.module('app.users', []))
