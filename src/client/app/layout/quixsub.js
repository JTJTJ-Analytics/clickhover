(function() {

	'use strict';

	angular
		.module('quix.layout')
		.controller('Quixsub', Quixsub);

	function Quixsub($stateParams, $rootScope, dataService, siteService) {
		var vm = this;

		$rootScope.$on('$stateChangeSuccess', getCurrentSite);

		//Temp SideNav Animation Here
		sideNav();
		vm.sideNav = sideNav;





		/*-----------------------------------------------------------------*\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\*-----------------------------------------------------------------*/

		function getCurrentSite() {
			sideNav();
			vm.id = siteService.getCurrentSite().data._id;
		}

		function sideNav(){
			dataService.sideNav();
		}

	}

})();
