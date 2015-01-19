angular.module('app', [
  'ngRoute',
  'projectsinfo',
  'security',
  'services.httpRequestTracker',
  'templates.app',
  'templates.common'
  ]);

angular.module('app').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/projectsinfo'});
}]);
angular.module('app').controller('AppCtrl', ['$scope', function($scope){
  console.log('into app controller');
}]);
angular.module('app').controller('HeaderCtrl', ['$scope', 'httpRequestTracker', 'security', function($scope, httpRequestTracker, security){
  
  $scope.hasPendingRequests = function() {
    return httpRequestTracker.hasPendingRequests();
  };

  $scope.isAuthenticated = security.isAuthenticated;
}]);
