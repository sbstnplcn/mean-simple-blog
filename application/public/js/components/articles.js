((app) => {
    'use strict'
    app.component('articles', {
        templateUrl: 'js/components/articles.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/articles').then((res) => {
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
                            $http.put('/articles/' + selectedArticle._id, selectedArticle).then((res) => {
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
                        this.articles[selectedArticle.position] = this.selectedArticle
                    }

                    // delete
                    this.delete = (selectedArticle, position) => {
                        $http.delete('/articles/' + selectedArticle._id, selectedArticle).then((res) => {
                            this.articles.splice(selectedArticle.position + this.articlestate, 1)
                        })
                        this.selectedArticle = null
                    }

                    //// addMode ////
                    //
                    // add Article
                    this.add = () => {
                        $http.post('/articles', this.newArticle).then((res) => {
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
