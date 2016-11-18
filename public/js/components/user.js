((app) => {
    'use strict'
    app.component('user', {
        templateUrl: 'js/components/user.html',
        controller: ['usersService', function(usersService) {
            angular.extend(this, {
                $onInit() {

                    //get all users
                    usersService.get().then((res) => {
                        this.users = res.data
                    })

                }
            })
        }]
    })
})(angular.module('app.user', []))
