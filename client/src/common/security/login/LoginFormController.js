angular.module('security.login.form', ['services.localizedMessages'])
.controller('LoginFormController', ['$scope', 'security', 'localizedMessages', function($scope, security, localizedMessages){
  $scope.user = {};
  $scope.authError = null;
  $scope.cancelLogin = function() {
    security.cancelLogin();
  };
  $scope.clearForm = function() {
    $scope.user = {};
  };
  $scope.login = function() {
    security.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
      if(!loggedIn) {
        $scope.authError = localizedMessages.get('login.error.invalidCredentials');
      }
    }, function(ex) {
      $scope.authError = localizedMessages.get('login.error.serverError', {exception: ex});
    });
  };
}]);
