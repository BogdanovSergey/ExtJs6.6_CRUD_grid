Ext.define('Demo.view.person.PersonWindow',{
  extend: 'Ext.window.Window',
  requires: ['Demo.view.person.PersonForm'],
  title: this.title || 'title',
  modal: true,
  layout: 'fit',
  items: [
    {
      xtype: 'personForm',
    }
  ]
});
