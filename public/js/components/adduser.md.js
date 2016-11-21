((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.adduser', {
            url:'/user/add',
            template: '<adduser></adduser>'
        })
    }])
})(angular.module('app.adduser', []))
