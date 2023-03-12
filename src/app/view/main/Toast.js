Ext.define('Demo.view.main.Toast', {
  extend: 'Ext.window.Toast',
  title: 'Успешно',
  width: 200,
  forceMsg: '',
  align: 't',
  autoCloseDelay: 1000,
  slideInDuration: 300,
  stickWhileHover: false,
  initComponent: function() {
    if(this.forceMsg) {
      this.html = this.forceMsg;
    } else {
      this.html = (+this.amount > 1) ? `Удалено ${this.amount} сотрудников` : 'Сотрудник удален';
    }
    this.callParent(arguments);
  }
});
