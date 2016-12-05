((app) => {
    'use strict'
    app.component('users', {
        templateUrl: 'js/components/users/users.html',
        controller: ['usersService', function(usersService) {
            angular.extend(this, {
                $onInit() {

                    //get all users
                    usersService.get().then((res) => {
                        this.users = res.data
                    })

                    //// editMode ////
                    //
                    let previous = {}

                    // edit
                    this.editMode = false

                    this.edit = (user, position) => {
                        if (this.editMode) {
                            usersService.edit(user).then((res) => {
                                this.editMode = false
                            })
                        } else {
                            previous[user.position] = angular.copy(user)
                            this.editMode = true

                        }
                    }

                    // cancel
                    this.cancel = (user, position) => {
                        user = previous[user.position]
                        this.users[position] = user
                        this.editMode = false

                    }

                    // delete
                    this.delete = (user, position) => {
                        usersService.delete(user).then((res) => {
                            this.users.splice(position, 1)
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.users', []))
