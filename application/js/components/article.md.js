((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.article', {
            url:'/{{PublishedAt}}',
            template: '<article />'
        })
    }])
})(angular.module('app.article', []))
