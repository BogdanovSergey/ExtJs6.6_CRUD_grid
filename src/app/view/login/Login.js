Ext.define('Demo.view.login.Login', {
  extend: 'Ext.window.Window',
  requires: [
    'Demo.view.login.LoginController',
    'Ext.form.Panel',
  ],
  xtype: 'login',
  controller: 'login',

  border: true,
  title: 'Вход в тестовое',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    style: {
      margin: '10px 10px 0 10px',
    },
    items: [{
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Любой текст',
      allowBlank: false
    }, {
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'Любой текст',
      allowBlank: false
    }],
    dockedItems: [{
      xtype: 'toolbar',
      dock: 'bottom',

      items: [
        { xtype: 'component', flex: 1 },
        { xtype: 'button',
          formBind: true,
          text: 'Войти',
          listeners: {
            click: 'onLoginClick'
          }}
      ]
    }]
  }
});
