Ext.define('Demo.Application', {
    extend: 'Ext.app.Application',
    name: 'Demo',
    stores: [
      'Demo.store.DemoGridStore'
    ],
    controllers: [
      'Controller'
    ],
    launch: function () {
      const loggedIn = localStorage.getItem("Authenticated");
      Ext.create({
        xtype: loggedIn ? 'appMain' : 'login'
      });

    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
