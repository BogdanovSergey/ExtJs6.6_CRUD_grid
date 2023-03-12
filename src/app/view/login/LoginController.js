Ext.define('Demo.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    localStorage.setItem("Authenticated", true);
    this.getView().destroy();
    Ext.create({
      xtype: 'appMain'
    });

  }
});
