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
                    this.edit = (selectedArticle) => {
                        if (selectedArticle.editMode) {
                            selectedArticle.editMode = false
                        } else {
                            selectedArticle.editMode = true
                        }
                    }

                    this.delete = (articles, idx) => {
                        this.articles.splice(idx, 1)
                        this.selectedArticle = null
                    }

                    this.add = () => {
                        this.selectedArticle = {}
                        this.articles.push(this.selectedArticle)
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
