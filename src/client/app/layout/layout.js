(function() {

	'use strict';

	angular
		.module('quix.layout')
		.controller('Layout', Layout);

	function Layout($scope, $rootScope, $state, dataService) {
		var vm = this;
		vm.hide = true;

		// when state changes, check to see if user exists in sessions. reroute if false
		$rootScope.$on('$stateChangeStart', getUser);
		$rootScope.$on('$stateChangeStart', hideSubNav);





		/*-----------------------------------------------------------------*\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\*-----------------------------------------------------------------*/

		function getUser(e, next) {
			var allowedStates = ['login', 'register', 'landingpage'];

			if(next.name !== 'landingpage') {

				dataService.getUser()
					.then(function(user) {
						vm.currentUser = user;

						/*------------------------------------------------------------------*\
						  Comment lines 31-36 to disable redirect when user is not logged in
						\*------------------------------------------------------------------*/
						if(user && allowedStates.indexOf(next.name) > -1) {
							$state.go('profile');
						}
						if(!user && next.name !== 'register') {
							$state.go('login');
						}

					});

			}
		}

		function hideSubNav(e, next) {
			var noSubNav = ['profile', 'login', 'register']
			if(noSubNav.indexOf(next.name) > -1) {
				vm.hide = false;
			} else {
				vm.hide = true;
			}
		}

	}

})();
