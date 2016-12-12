((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('app.articles', {
            url: '/',
            template: '<articles></articles>'
        })
        .state('app.article', {
            url: '/article/:articleId',
            template: '<article></article>'
        })
        .state('app.add', {
            url: '/add',
            template: '<add></add>'
        })
        .state('app.users', {
            url: '/users',
            template: '<users></users>'
        })
        .state('app.user', {
            url: '/users/user/:userId',
            template: '<user></user>'
        })
        .state('app.adduser', {
            url: '/users/add',
            template: '<adduser></adduser>'
        })
        .state('app.login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('callback', {
            url: '/auth/callback/:token',
            template: '',
            controller: ['usersService', '$stateParams', '$state', function(usersService, $stateParams, $state) {
                if ($stateParams.token) {
                    usersService.setToken($stateParams.token).then((user) => {
                        $state.go('app.articles')
                    })
                } else {
                    $state.go('app.articles')
                }
            }]
        })
    }])

})(angular.module('app.config'))
