angular.module('projectsinfo', [], ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projectsinfo', {
    templateUrl: 'projectsinfo/list.tpl.html',
    controller: 'ProjectInfoListCtrl'
  });
}]);
angular.module('projectsinfo').controller('ProjectInfoListCtrl', ['$scope', function($scope){
  console.log('projectsinfo controller');
}]);