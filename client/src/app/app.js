angular.module('app', [
  'ngRoute',
  'projectsinfo',
  'security',
  'services.httpRequestTracker',
  'templates.app',
  'templates.common'
  ]);
angular.module('app').constant('I18N.MESSAGES', {
  'login.error.invalidCredentials': 'Login failed. Please check your credentials and try again.',
  'login.error.serverError': 'There was a problem with authenticating: {{exception}}.'
});
angular.module('app').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/projectsinfo'});
}]);
angular.module('app').run(['security', function(security){
  security.requestCurrentUser();
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
