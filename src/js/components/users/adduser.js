((app) => {
    'use strict'
    app.component('adduser', {
        templateUrl: 'js/components/users/adduser.html',
        controller: ['usersService', function(usersService) {
            angular.extend(this, {
                $onInit() {

                    // add Article
                    this.add = () => {
                        usersService.add(this.newUser).then((res) => {
                            this.newUser
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.adduser', []))
