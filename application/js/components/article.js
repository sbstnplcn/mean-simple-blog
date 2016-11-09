((app) => {
    'use strict'
    app.component('article', {
        templateUrl: 'js/components/article.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/posts.json').then((res) => {
                        this.articles = res.data
                    })
                    this.articlestate = 0
                    this.next = () => {
                        if (this.articlestate == this.articles.length - 1) {
                            this.articlestate = 0
                        } else {
                            this.articlestate++
                        }

                    }
                    this.prev = () => {
                        if (this.articlestate <= 0) {
                            this.articlestate = this.articles.length
                        } else {
                            this.articlestate--
                        }
                    }
                }
            })
        }]
    })
})(angular.module('app.article', []))
