angular.module('app', ['templates.app']);

angular.module('app').controller('AppCtrl', ['$scope', function($scope){
  console.log('into app controller');
}]);