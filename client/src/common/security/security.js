angular.module('security.service', [
  'ui.bootstrap.dialog'
])
.factory('security', ['$http', '$dialog', function($http, $dialog){

  var loginDialog = null;
  function openloginDialog() {
    if(loginDialog) {
      throw new Error('Trying to open a dialog that is already open!');
    }
    loginDialog = $dialog.dialog();
    loginDialog.open('security/login/form.tpl.html', '').then(onLoginDialogClose);
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
      openloginDialog();
    }
  };
  return service;
}]);