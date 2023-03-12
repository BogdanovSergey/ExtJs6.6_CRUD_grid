Ext.define('Demo.view.grid.Grid', {
  extend: 'Ext.grid.Panel',
  requires: [
    'Demo.view.grid.GridController',
    'Demo.view.person.PersonWindow',
    'Demo.view.person.PersonForm'
  ],
  xtype: 'demoGrid',
  store: 'demoGridStore',
  controller: 'gridController',
  style: {
    marginLeft: '1rem',
  },
  columnLines : true,
  checkBoxKey : 'demoGrid-checkcolumn-arr',
  columns: [
    {
      xtype: 'checkcolumn',
      dataIndex: 'checked',
      menuDisabled: true,
      sortable: false,
      hideable: false,
      listeners: {
        checkchange : 'onRowCheck'
      }
    },
    { text: 'Аватар',
      renderer: function (val, meta, record) {
        //return record.getData().age;
        let img = (record.getData().age > 35 ) ? 'oldman.png' : 'young.png';
        // style="border: 1px solid black"
        return `<img src="/images/${img}" title="${img}" width="20px">`;
      }
    },
    { text: 'Guid', dataIndex: 'guid', hidden: false },
    { text: 'ФИО',
      dataIndex: 'name',
      renderer: function (val, meta, record) {
        let nameObj = record.getData().name;
        return `${nameObj.first}. ${nameObj.last.substring(0, 1)}.`;
      }
    },
    { text: 'Email', dataIndex: 'email', flex: 1 },
    { text: 'Возраст', dataIndex: 'age' },
    //{ text: 'last', dataIndex: 'last', hidden: false },
    { xtype: 'actioncolumn',
      menuDisabled: true,
      sortable: false,
      hideable: false,
      width: 30,
      items: [{
        tooltip:'Редактировать',
        iconCls: 'icon-grid',
        handler: function(grid, rowIndex, colIndex) {
          const controller = Ext.create('Demo.view.grid.GridController');
          controller.onRowEdit(grid, null, null, rowIndex);
        }
      }]
    },
    { xtype: 'actioncolumn',
      menuDisabled: true,
      sortable: false,
      hideable: false,
      width: 30,
      items: [{
        tooltip:'Удалить',
        iconCls: 'icon-delete',
        handler: function(grid, rowIndex, colIndex) {
          let store = grid.getStore();
          store.removeAt(rowIndex);
          Ext.create('Demo.view.main.Toast', {amount: 1}).show();
        }
      }]
    }
  ],

  tbar: [
    { xtype: 'button', text: 'Добавить',
      iconCls: 'icon-add',
      handler: 'onAddNewRow',
    },
    { xtype: 'button',
      text: 'Удалить',
      itemId: 'deleteSelectedRowsBtn',
      handler: 'onDeleteSelectedRows',
      disabled: true }
  ],
  listeners: {
    afterrender: 'onAfterRender',
    itemdblclick: 'onRowEdit'
  }

});
