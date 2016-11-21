((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.articles', {
            url:'/',
            template: '<articles></articles>'
        })
    }])
})(angular.module('app.articles', []))
