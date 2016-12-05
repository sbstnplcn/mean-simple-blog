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
            url: '/article/:articleId',
            template: '<article></article>'
        })
        $stateProvider.state('app.add', {
            url: '/add',
            template: '<add></add>'
        })
        $stateProvider.state('app.users', {
            url: '/users',
            template: '<users></users>'
        })
        $stateProvider.state('app.user', {
            url: '/users/user/:userId',
            template: '<user></user>'
        })
        $stateProvider.state('app.adduser', {
            url: '/users/add',
            template: '<adduser></adduser>'
        })
    }])

})(angular.module('app.config'))
