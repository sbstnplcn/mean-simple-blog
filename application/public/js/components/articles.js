((app) => {
    'use strict'
    app.component('articles', {
        templateUrl: 'js/components/articles.html',
        controller: ['articlesService', function(articlesService) {
            angular.extend(this, {
                $onInit() {
                    articlesService.get().then((res) => {
                        this.articles = res.data
                    })

                    //// get date ////
                    //
                    this.date = new Date().getTime()

                    //// pagination ////
                    //
                    this.articlestate = 0
                    this.next = () => {
                        this.articlestate == this.articles.length - 1 ? this.articlestate = 0 : this.articlestate++
                    }

                    this.prev = () => {
                        this.articlestate < 1 ? this.articlestate = this.articles.length - 1 : this.articlestate--
                    }

                    //// select mode ////
                    //
                    this.selectArticle = (selectedArticle, index) => {
                        this.selectedArticle = selectedArticle
                        this.selectedArticle.position = index
                    }

                    this.close = () => {
                        this.selectedArticle = null
                    }
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

                    //// addMode ////
                    //
                    // add Article
                    this.add = () => {
                        articlesService.add(this.newArticle).then((res) => {
                            this.newArticle.PublishedAt = this.date
                            this.articles.push(this.newArticle)
                            this.newArticle = {}
                            this.addNewArticle = null
                        })
                    }

                    // close AddNewArticle
                    this.closeAddNewArticle = () => {
                        this.newArticle = {}
                        this.addNewArticle = null
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
