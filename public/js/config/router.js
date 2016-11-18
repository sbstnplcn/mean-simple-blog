((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        $stateProvider.state('app.articles', {
            url: '/',
            template: '<articles></articles>'
        })
        $stateProvider.state('app.article', {
            url: '/article/:position',
            template: '<article></article>'
        })
        $stateProvider.state('app.add', {
            url: '/add',
            template: '<add></add>'
        })
        $stateProvider.state('app.user', {
            url: '/user',
            template: '<user></user>'
        })
    }])

})(angular.module('app.config'))