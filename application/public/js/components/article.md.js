((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.article', {
            url:'/article/:position',
            template: '<article />'
        })
    }])
})(angular.module('app.article', []))
