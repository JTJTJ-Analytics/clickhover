(function() {

  angular
    .module('quix.user')
    .factory('userService', userService);

  function userService($http, $state) {

		return {
			login: login,
			logout: logout,
			register: register,
			updateUser: updateUser,
			getUser: getUser,
      deleteUser: deleteUser
		}

		////////////////////////////////////////////////

		function login(user) {
      return $http({
        method: 'POST',
        url: '/auth/login',
        data: user
      }).then(function(response) {
				if(response.data === 'Unauthorized') {
					return response;
				} else {
					$state.go('profile');
				}
      });
    }

    function logout() {
      return $http({
        method: 'GET',
        url: '/auth/logout'
      }).then(function(response) {
				if(response.data === 'logged out') {
					sessionStorage.clear();
				}
        return response;
      });
    }

    function register(user) {
      return $http({
        method: 'POST',
        url: '/auth/register',
        data: user
      }).then(function(response) {
        return response;
      });
    };

    function updateUser(updatedUser, id) {
      return $http({
        method: 'PUT',
        url: "/auth/" + id,
        data: updatedUser
      }).then(function(user) {
				console.log(user);
        return user.data;
      });
    }

    function deleteUser(id) {
      return $http({
        method: 'DELETE',
        url: "/auth/" +id
      }).then(function(response) {
        return response;
      });
    }

    function getUser() {
      return $http({
        method: 'GET',
        url: '/auth/me'
      }).then(function(response) {
        return response;
      });
    }

  }

})();
