((app) => {
    'use strict'
    app.component('article', {
        templateUrl: 'js/components/article.html',
        controller: ['articlesService', '$stateParams', function(articlesService, $stateParams) {
            angular.extend(this, {
                $onInit() {

                    // get all articles
                    articlesService.get().then((res) => {
                        this.articles = res.data
                    })

                    // begin of ng-repeat
                    this.articleView = $stateParams.position

                    //// editMode ////
                    //
                    let previous = {}

                    // edit
                    this.edit = (article) => {
                        if (this.editMode) {
                            articlesService.edit(article).then((res) => {
                                this.editMode = false
                            })
                        } else {
                            previous[article.position] = angular.copy(article)
                            this.editMode = true
                        }
                    }

                    // cancel
                    this.cancel = (article) => {
                        article = previous[article.position]
                        this.articles[this.articleView] = article
                        this.editMode = false

                    }

                    // delete
                    this.delete = (article, position) => {
                        articlesService.delete(article).then((res) => {
                            this.articles.splice(article.position + this.articlestate, 1)
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.article', []))
