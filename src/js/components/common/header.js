((app) => {
    'use strict'
    app.component('header', {
        templateUrl: 'js/components/common/header.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {


                }
            })
        }]
    })
})(angular.module('app.common'))
