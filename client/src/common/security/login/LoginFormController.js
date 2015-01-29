angular.module('security.login.form', [])
.controller('LoginFormController', ['$scope', 'security', function($scope, security){
  $scope.cancelLogin = function() {
    security.cancelLogin();
  };
  $scope.clearForm = function() {ơ
    $scope.user = {};
  };
  $scope.login = function() {
    security.login().then(function(){

    }, function(ex) {

    });
  }
}]);
