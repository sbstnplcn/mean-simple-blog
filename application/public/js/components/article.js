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
                    this.selectedArticleView = $stateParams.position

                    //// editMode ////
                    //
                    let previous = {}

                    // edit
                    this.edit = (selectedArticle) => {
                        if (selectedArticle.editMode) {
                            articlesService.edit(selectedArticle).then((res) => {
                                this.selectedArticle.editMode = false
                            })
                        } else {
                            previous[selectedArticle.position] = angular.copy(selectedArticle)
                            this.selectedArticle.editMode = true
                        }
                    }

                    // cancel
                    this.cancel = (selectedArticle) => {
                        this.selectedArticle = previous[selectedArticle.position]
                        this.articles[selectedArticle.position + this.articlestate] = this.selectedArticle
                    }

                    // delete
                    this.delete = (selectedArticle, position) => {
                        articlesService.delete(selectedArticle).then((res) => {
                            this.articles.splice(selectedArticle.position + this.articlestate, 1)
                        })
                        this.selectedArticle = null
                    }

                }
            })
        }]
    })
})(angular.module('app.article', []))
