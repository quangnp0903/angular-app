angular.module('security.login.form', [])
.controller('LoginFormController', ['$scope', 'security', function($scope, security){
  $scope.cancelLogin = function() {
    security.cancelLogin();
  };
}]);