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

                    //// editMode ////
                    //
                    let previous = {}

                    // edit
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
                    this.cancel = (user) => {
                        user = previous[user.position]
                        this.users[this.userView] = user
                        this.editMode = false

                    }

                    // delete
                    this.delete = (user, position) => {
                        usersService.delete(user).then((res) => {
                            this.users.splice(user.position, 1)
                        })
                    }

                    // add Article
                    this.add = () => {
                        usersService.add(this.newUser).then((res) => {
                            this.newUser
                            this.users.push(this.newUser)
                            this.addNewUser = null
                        })
                    }

                }
            })
        }]
    })
})(angular.module('app.user', []))
