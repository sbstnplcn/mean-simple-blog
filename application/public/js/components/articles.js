((app) => {
    'use strict'
    app.component('articles', {
        templateUrl: 'js/components/articles.html',
        controller: ['articlesService', function(articlesService) {
            angular.extend(this, {
                $onInit() {

                    // get all articles
                    articlesService.get().then((res) => {
                        this.articles = res.data
                    })

                    // pagination
                    this.articlestate = 0
                    this.next = () => {
                        this.articlestate == this.articles.length - 1 ? this.articlestate = 0 : this.articlestate++
                    }

                    this.prev = () => {
                        this.articlestate < 1 ? this.articlestate = this.articles.length - 1 : this.articlestate--
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
