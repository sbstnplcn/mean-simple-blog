((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.articles', {
            url:'/article/{{selectedArticle._id}}',
            template: '<article />'
        })
    }])
})(angular.module('app.articles', []))
