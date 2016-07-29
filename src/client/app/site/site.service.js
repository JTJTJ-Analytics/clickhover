(function() {

  angular
    .module('quix.site')
    .service('siteService', siteService)

  function siteService($http, $q) {


    this.getSite = function(id) {
      return $http({
        method: 'GET',
        url: '/api/site/' + id
      }).then(function(response) {
        // console.log(response.data)
          return response;
      });
    }

    this.deleteSite = function(id) {
      console.log("site service deleteSite")
      return $http({
        method: 'DELETE',
        url: '/api/site/' + id
      }).then(function(response) {
          return response;
      });
    }

    this.addSite = function(site) {
      return $http({
        method: 'POST',
        url: '/api/site',
        data: site
      }).then(function(response) {
        // push 'response.data._id' to currentuser.sites[];
        // console.log(response.data._id);
        return response;
      }, function(err) {
        console.log(err);
      });
    }

  }
})()
