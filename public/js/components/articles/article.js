((app) => {
    'use strict'
    app.component('article', {
        templateUrl: 'js/components/articles/article.html',
        controller: ['articlesService', '$stateParams','$state', function(articlesService, $stateParams, $state) {
            angular.extend(this, {
                $onInit() {

                    // get all articles
                    articlesService.get().then((res) => {
                        this.articles = res.data
                    })

                    // begin of ng-repeat
                    this.articleView = $stateParams.position

                    // pagination
                    this.next = () => {
                        $state.go('.', {position: Number($stateParams.position) == this.articles.length - 1 ? '0' : Number($stateParams.position) + 1})
                    }

                    this.prev = () => {
                        $state.go('.', {position: Number($stateParams.position) < 1 ? this.articles.length - 1 : Number($stateParams.position) - 1})
                    }

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
