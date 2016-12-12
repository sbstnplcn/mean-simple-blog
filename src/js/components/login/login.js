((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['usersService', '$state', function(usersService, $state) {
            angular.extend(this, {
                $onInit() {

                },
                connect() {
                    usersService.connect(this.user).then((res) => {
                        let user = res.data
                        sessionStorage.setItem('token', user.token)
                        $state.go('app.articles')
                    })
                }
            })
        }]
    })
})(angular.module('app.login', []))
