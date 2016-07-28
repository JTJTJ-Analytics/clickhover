(function() {

	angular
    .module('quix.user')
    .controller('Profile', Profile);

	function Profile($state, $timeout, dataService, userService) {

		var vm = this;
		var currentUser;

		dataService.getUser()
			.then(function(user) {
				currentUser = user;

				vm.updatedUser = {};
				vm.updatedUser.username = currentUser.username;
				vm.updatedUser.email = currentUser.email;
				vm.updateUser = updateUser;
				vm.deleteUser = deleteUser;
			})

		////////////////////////////////////////////////////////////

		function updateUser(updatedUser) {
			vm.alertUsername = false;
			if(updatedUser.username.length < 4) {
				vm.alertUsername = 'Your username is too short (4 character minimum).';
				vm.updatedUser.username = currentUser.username;
				vm.updatedUser.email = currentUser.email;
				return;
			}
			if(updatedUser.username.length > 20) {
				vm.alertUsername = 'Your username is too long (20 character maximum).';
				vm.updatedUser.username = currentUser.username;
				vm.updatedUser.email = currentUser.email;
				return;
			}

			userService.updateUser(updatedUser, currentUser._id)
				.then(function(response) {
					dataService.refreshSessionUser(response.data);
				});
		}

		function deleteUser(email) {
			if (currentUser.email !== email) return console.log('wrong email');
			userService.deleteUser(currentUser._id).then(function(response) {
				$state.go('register')
			});
		}

	}

})();
