((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app', {
            url: '',
            abstract: false,
            template: '<articles />'
        })
    }])
})(angular.module('app.config'))
