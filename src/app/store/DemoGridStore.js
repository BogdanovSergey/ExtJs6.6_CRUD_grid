Ext.define('Demo.store.DemoGridStore', {
  extend  : 'Ext.data.Store',
  storeId : 'demoGridStore',
  model   : 'Demo.model.Person',
  fields  : ['guid', 'email', 'name', 'age', 'checked'],
  proxy   : {
    type  : 'ajax',
    url   : 'users.json',
    reader: {
      type: 'json',
    }
  },
  autoLoad: true
});
