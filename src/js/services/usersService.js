((app) => {
    'use strict'
    app.service('usersService', ['$http', function($http) {
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
            connect(user) {
                return $http.post('/api/auth', user)
                
            }
        }
    }])
})(angular.module('app.services'))
