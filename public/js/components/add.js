((app) => {
    'use strict'
    app.component('add', {
        templateUrl: 'js/components/add.html',
        controller: ['articlesService', function(articlesService) {
            angular.extend(this, {
                $onInit() {

                    // get date
                    this.date = new Date().getTime()

                    // add Article
                    this.add = () => {
                        articlesService.add(this.newArticle).then((res) => {
                            this.newArticle.PublishedAt = this.date
                        })
                    }
                    
                }
            })
        }]
    })
})(angular.module('app.add', []))
