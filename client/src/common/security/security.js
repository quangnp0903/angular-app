angular.module('security.service', [
  'ui.bootstrap.dialog'
])
.factory('security', ['$http', '$q', '$dialog', '$location', function($http, $q, $dialog, $location){

  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }
  var loginDialog = null;
  function openLoginDialog() {
    if(loginDialog) {
      throw new Error('Trying to open a dialog that is already open!');
    }
    loginDialog = $dialog.dialog();
    loginDialog.open('security/login/form.tpl.html', 'LoginFormController').then(onLoginDialogClose);
  }
  function closeLoginDialog(success) {
    if(loginDialog) {
      loginDialog.close(success);
    }
  }
  function onLoginDialogClose() {    
    loginDialog = null;    
  }
  var service = {
    currentUser: null,
    isAuthenticated: function() {
      return !!service.currentUser;
    },
    showLogin: function() {
      openLoginDialog();
    },
    login: function(email, password) {
      var request = $http.post('/login', {email: email, password: password});
      return request.then(function(response) {
        service.currentUser = response.data.user;
        if(service.isAuthenticated()) {
          closeLoginDialog(true);
        }
        return service.isAuthenticated();
      });
    },
    logout: function(redirectTo) {
      $http.post('/logout').then(function(){
        service.currentUser = null;
        redirect(redirectTo);
      });
      service.currentUser = null;
    },
    cancelLogin: function() {
      closeLoginDialog(true);
    },
    requestCurrentUser: function() {
      if(service.isAuthenticated()){
        $q.when(service.currentUser);
      }else{
        return $http.get('/current-user').then(function(response){
          service.currentUser = response.data.user;          
          return service.currentUser;
        });
      }
    }
  };
  return service;
}]);