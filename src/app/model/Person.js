Ext.define("Fio", {
  extend: 'Ext.data.Model',
  fields: [
    'first', 'last'
  ],
});

Ext.define('Demo.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
      { name: 'guid', type: 'string' },
      { name: 'name', type: 'string'},
      { name: 'email', type: 'string' },
      //{ name: 'last', type: 'string' },
      { name: 'age', type: 'integer' },
    ],

    hasOne: { model: 'Fio', name: 'name'},
    /*validators: [
      {
        type: 'email',
        field: 'email'
      },
      {
        type: 'length',
        field: 'age',
        max: 3
      }]*/
});
