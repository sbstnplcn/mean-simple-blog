((app) => {
    'use strict'
    app.component('articles', {
        templateUrl: 'js/components/articles.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/posts.json').then((res) => {
                        this.articles = res.data
                    })

                    //get date
                    let d = new Date()
                    this.date = d.getTime()
                        //articles
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

                    //editMode
                    let previous = {}
                    this.edit = (selectedArticle, idx) => {
                        if (selectedArticle.editMode) {
                            this.selectedArticle.editMode = false
                        } else {
                            previous[selectedArticle.idx] = angular.copy(selectedArticle)
                            this.selectedArticle.editMode = true
                        }
                    }

                    this.cancel = (selectedArticle, idx) => {
                        this.selectedArticle= previous[selectedArticle.idx]
                        this.selectedArticle.editMode = false
                    }

                    this.delete = (articles, idx) => {
                        this.articles.splice(idx, 1)
                        this.selectedArticle = null
                    }

                    this.add = (newArticle) => {
                        this.newArticle = {}
                        this.articles.push(this.newArticle)
                        this.addArticle = null
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
