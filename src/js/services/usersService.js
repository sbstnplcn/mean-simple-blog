((app) => {
    'use strict'
    app.service('usersService', ['$http', '$cookies', function($http, $cookies) {
        return {
            get() {
                return $http.get('/api/users')
            },
            getPopulate(users) {
                return $http.get('/api/users/' + users.userId)
            },
            add(newUser) {
                return $http.post('/api/users', newUser)
            },
            edit(selectedUser) {
                return $http.put('/api/users/' + selectedUser._id, selectedUser)
            },
            delete(selectedUser) {
                return $http.delete('/api/users/' + selectedUser._id)
            },
            connect(data) {
                return $http.post('/api/auth', data).then((res) => {
                    this.currentUser = res.data.user
                    $cookies.put('token', res.data.token)
                })
            },
            disconnect() {
                return new Promise((resolve, reject) => {
                    $cookies.remove("token")
                    this.currentUser = null
                    resolve()
                })
            }
        }
    }])
})(angular.module('app.services'))
