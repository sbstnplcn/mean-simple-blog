((app) => {
    'use strict'
    app.service('articlesService', function($http) {
    return {
        get() {
            return $http.get('/articles')
        },
        add(newArticle) {
            return $http.post('/articles', newArticle)
        },
        edit(selectedArticle) {
            return $http.put('/articles/' + selectedArticle._id, selectedArticle)
        },
        delete(selectedArticle) {
            return $http.delete('/articles/' + selectedArticle._id)
        }
    }
    })
})(angular.module('app.services', []))
