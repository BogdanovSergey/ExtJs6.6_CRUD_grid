/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'Demo',
    extend: 'Demo.Application',
    requires: [
        'Demo.*',
        'Ext.form.field.Display',
    ],
    /*controllers: [
      'Controller'
    ],*/
    //mainView: 'Demo.view.main.Main',
    //mainView: 'Demo.view.login.Login',

});
