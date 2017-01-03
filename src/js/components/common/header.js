((app) => {
    'use strict'
    app.component('header', {
        templateUrl: 'js/components/common/header.html',
        controller: ['usersService', '$state', function(usersService, $state) {
            angular.extend(this, {
                $onInit() {
                    usersService.getCurrent().then((user) => {
                        this.currentUser = user
                    })
                },
                disconnect() {
                    usersService.disconnect().then((res) => {
                        $state.go('app.articles')
                        $state.reload()
                    })
                }
            })
        }]
    })
})(angular.module('app.common'))
