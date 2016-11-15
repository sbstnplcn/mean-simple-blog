((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.articles', {
            url:'/add',
            template: '<add />'
        })
    }])
})(angular.module('app.articles', []))
