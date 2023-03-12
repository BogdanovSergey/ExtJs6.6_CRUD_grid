Ext.define('Demo.view.main.Main', {
  extend: 'Ext.container.Viewport',
  xtype: 'appMain',
  itemId: 'viewport',
  title: 'Main.Viewport!',
  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',
    'Demo.view.person.PersonForm',
    'Demo.view.main.Toast'
  ],
  layout: 'border',
  items: [
    {
      region: 'center',
      xtype: 'mainTabPanel',
  }]
});
