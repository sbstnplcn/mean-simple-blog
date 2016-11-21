((app) => {
    'use strict'
    app.component('adduser', {
        templateUrl: 'js/components/adduser.html',
        controller: ['usersService', function(usersService) {
            angular.extend(this, {
                $onInit() {

                    // add Article
                    this.add = () => {
                        usersService.add(this.newUser).then((res) => {
                            this.newUser
                            console.log(this.newUser)
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.adduser', []))
