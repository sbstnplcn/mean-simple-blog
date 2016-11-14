((app) => {
    'use strict'
    app.component('articles', {
        bindings: {
            editMode: "<"
        },
        templateUrl: 'js/components/articles.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/articles').then((res) => {
                        this.articles = res.data
                    })

                    // get date
                    //
                    this.date = new Date().getTime()

                    // pagination
                    //
                    this.articlestate = 0
                    this.next = () => {
                        if (this.articlestate == this.articles.length - 1) {
                            this.articlestate = 0
                        } else {
                            this.articlestate++
                        }
                    }

                    this.prev = () => {
                        if (this.articlestate < 1) {
                            this.articlestate = this.articles.length - 1
                        } else {
                            this.articlestate--
                        }
                    }

                    // select mode
                    //
                    this.selectArticle = (article, index) => {
                        this.selectedArticle = article;
                        this.selectedArticle.position = index
                    }

                    // editMode
                    //
                    let previous = {}

                    this.edit = (selectedArticle, index) => {
                        if (selectedArticle.editMode) {
                            $http.put('/articles/' + selectedArticle._id, selectedArticle).then((res) => {
                                this.selectedArticle.editMode = false
                            })
                        } else {
                            previous[selectedArticle.index] = angular.copy(selectedArticle)
                            this.selectedArticle.editMode = true
                        }
                    }

                    this.cancel = (selectedArticle, index) => {
                        this.selectedArticle = previous[selectedArticle.index]
                        selectedArticle.editMode = null
                    }

                    this.delete = (selectedArticle) => {
                        $http.delete('/articles/' + selectedArticle._id, selectedArticle).then((res) => {
                            this.articles.splice(selectedArticle.position, 1)
                        })
                        this.selectedArticle = null
                    }

                    // addMode
                    //
                    this.add = () => {
                        $http.post('/articles', this.newArticle).then((res) => {
                            this.newArticle.PublishedAt = this.date
                            this.articles.push(this.newArticle)
                            this.newArticle = {}
                            this.addNewArticle = null
                        })
                    }

                    this.closeAddNewArticle = () => {
                        this.newArticle = {}
                        this.addNewArticle = null
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
