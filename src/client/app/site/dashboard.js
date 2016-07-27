(function() {

  'use strict';
  angular
    .module('quix.site')
    .controller('Dashboard', Dashboard)

  function Dashboard($scope, siteService) {

    var vm = this;
    vm.getSite = function() {
      siteService.getSite().then(function(response) {
        console.log(response);
        vm.data = response.data;
      })
    }
    vm.getSite();


  }

})()
