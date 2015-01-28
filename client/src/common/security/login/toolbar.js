angular.module('security.login.toolbar', [])
.directive('loginToolbar', ['security', function(security){
  var directive = {
    templateUrl: 'security/login/toolbar.tpl.html',
    restrict: 'E',
    replace: true,
    scope: true,
    link: function($scope, $element, $attrs, $controller) {
      $scope.login = security.showLogin;      
    }
  };
  return directive;
}]);