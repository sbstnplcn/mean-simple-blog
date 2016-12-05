((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.add', {
            url:'/add',
            template: '<add></add>'
        })
    }])
})(angular.module('app.add', []))
