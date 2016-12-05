((app) => {
    'use strict'
    app.component('user', {
        templateUrl: 'js/components/users/user.html',
        controller: ['usersService', '$stateParams', function(usersService, $stateParams) {
            angular.extend(this, {
                $onInit() {

                    //get all users
                    // usersService.get().then((res) => {
                    //     this.users = res.data
                    //
                    //
                    // })

                    usersService.getPopulate($stateParams).then((res)=>{
                        this.user = res.data
                    })
                    // get all users populate of articles


                    //begin of ng-repeat
                    this.userView = $stateParams.position

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
                        this.users[this.userView] = user
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
})(angular.module('app.user', []))
