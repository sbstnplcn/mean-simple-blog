((app) => {
    'use strict'
    app.component('footer', {
        templateUrl: 'js/components/common/footer.html',
        controller: [function() {
            angular.extend(this, {
                $onInit() {


                }
            })
        }]
    })
})(angular.module('app.common'))
