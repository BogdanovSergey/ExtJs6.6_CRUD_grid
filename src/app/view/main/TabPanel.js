Ext.define('Demo.view.main.TabPanel', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainTabPanel',
  header: false,
  title: 'mainTabPanel',
  tabPosition: 'left',
  tabRotation: 0,
  items: [
    {
      title: 'Сотрудники',
      tooltip: 'Грид со списком сотрудников',
      items: [
        {
          xtype: 'demoGrid'
        }
      ]
    }, {
      title: 'О системе',
      tooltip: 'Описание выполненной работы',
      items: [],
    }]
});
