angular.module('security.service', [
])
.factory('security', ['$http', function($http){
  var service = {
    currentUser: null,
    isAuthenticated: function() {
      return !!service.currentUser;
    }
  };
  return service;
}]);