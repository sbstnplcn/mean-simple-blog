((app) => {
    'use strict'
    app.component('articles', {
        templateUrl: 'js/components/articles.html',
        controller: ['$http', function($http) {
            angular.extend(this, {
                $onInit() {
                    $http.get('/posts.json').then((res) => {
                        this.articles = res.data
                        this.date = new Date(this.articles[0].PublishedAt * 1000)

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

                    //article
                    this.soloarticlestate = 0
                    this.showarticle = (index) => {
                        this.soloarticlestate = this.articlestate + index
                    }


                    //editMode
                    this.edit = (article) => {
                        if (article.editMode) {
                            article.editMode = false
                        } else {
                            article.editMode = true
                        }
                    }

                    this.delete = (article, idx) => {
                        this.articles.splice(idx, 1)
                    }

                }
            })
        }]
    })
})(angular.module('app.articles', []))
