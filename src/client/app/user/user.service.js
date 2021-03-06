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





		/*-----------------------------------------------------------------*\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\*-----------------------------------------------------------------*/

		function login(user) {
      return $http({
        method: 'POST',
        url: '/auth/login',
        data: user
      }).then(function(response) {
				return response
      });
    }

    function logout() {
      return $http({
        method: 'GET',
        url: '/auth/logout'
      }).then(function(response) {
				sessionStorage.clear();
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
