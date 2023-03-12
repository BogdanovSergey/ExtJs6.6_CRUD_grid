Ext.define('Demo.controller.Controller', {
    extend: 'Ext.app.Controller',
    init: function() {

    },
    onLaunch: function () {
      //console.log('onLaunch');
    },

    control: {
      'button': {
        click: 'buttonClick'
      },
      'viewport > panel': {
        render: 'onPanelRendered'
      }
    },

    buttonClick: function() {
      //console.log('buttonClick');
    },

    onPanelRendered: function() {
      //console.log('onPanelRendered');
    }

});
