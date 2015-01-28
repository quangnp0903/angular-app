angular.module('security.service', [
  'ui.bootstrap.dialog'
])
.factory('security', ['$http', '$dialog', function($http, $dialog){

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
    cancelLogin: function() {
      closeLoginDialog(true);
    }
  };
  return service;
}]);