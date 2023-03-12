Ext.define('Demo.view.grid.GridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.gridController',

  onRowCheck: function(me, rowIndex, checked) {
    let grid = me.up('grid');
    let checkArr = sessionStorage.getItem(grid.checkBoxKey);
    checkArr = (!checkArr) ? {} : JSON.parse(checkArr);
    checkArr[rowIndex] = checked;
    sessionStorage.setItem(grid.checkBoxKey, JSON.stringify(checkArr));

    let delAllBtn = grid.down('#deleteSelectedRowsBtn');
    if(checked) {
      delAllBtn.setDisabled(false);
    } else {
      for(let i=0; i < Object.keys(checkArr).length; i++) {
        if(checkArr[i]) {
          delAllBtn.setDisabled(false);
          return;
        }
      }
      delAllBtn.setDisabled(true);
    }
  },
  onDeleteSelectedRows: function(me) {
    let amount = 0;
    let grid = me.up('grid');
    let checkArr = sessionStorage.getItem(grid.checkBoxKey);
    checkArr = (!checkArr) ? {} : JSON.parse(checkArr);
    function compare(a, b) {
      if (a < b) return 1;
      if (a === b) return 0;
      if (a > b) return -1;
    }
    const arr = Object.keys(checkArr).sort(compare);
    for(let rowId of arr) {
      if(checkArr[rowId]) {
        amount++;
        grid.getStore().removeAt(rowId);
        this.onRowCheck(me, rowId, false)
      }
    }
    Ext.create('Demo.view.main.Toast', {amount: amount}).show();

  },
  onAfterRender : function(grid) {
    sessionStorage.removeItem(grid.checkBoxKey);
    // TODO не смог быстро настроить layout grid'a, обыграл здесь.
    const h = Ext.ComponentQuery.query('#viewport')[0].getHeight();
    grid.setHeight(h);
  },
  onRowEdit: function(grid, record, item, rowIndex) {
    let store = grid.getStore();
    let userData = store.getAt(rowIndex);
    userData.set('rowIndex', rowIndex);
    userData.set('last', userData.getData().name.last);
    userData.set('first', userData.getData().name.first);

    Ext.create('Demo.view.person.PersonWindow', {
      title: "Редактирование сотрудника",
      userData: userData.getData()
    }).show();


  },
  onAddNewRow : function(me) {
    Ext.create('Demo.view.person.PersonWindow', {title: "Добавляем нового сотрудника"}).show();
  }
});
