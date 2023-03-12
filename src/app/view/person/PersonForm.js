Ext.define('Demo.view.person.PersonForm',{
  extend: 'Ext.form.Panel',
  xtype: 'personForm',
  bodyPadding: 5,
  width: 400,
  layout: 'anchor',
  defaults: {
    anchor: '100%'
  },
  style: {
    margin: '10px 10px 0 10px',
  },
  defaultType: 'textfield',
  items: [
    {
      name: 'rowIndex',
      xtype: 'hiddenfield',
    },
    {
      fieldLabel: 'Guid',
      name: 'guid',
      allowBlank: false,
      listeners: {
        afterrender: function() {
          if(this.up('window').userData) return;
          const guid = Ext.create('Ext.data.identifier.Uuid').generate();
          this.setValue(guid);
        }
      }
    },
    {
      fieldLabel: 'email',
      name: 'email',
      vtype: 'email',
      allowBlank: false,
      listeners: {
        afterrender: function() {
          if(this.up('window').userData) return;
          this.setValue('alexander@pushkin.ru');
        }
      }
    },{
      fieldLabel: 'Имя',
      name: 'first',
      allowBlank: false,
      listeners: {
        afterrender: function() {
          if(this.up('window').userData) return;
          this.setValue('Александр');
        }
      }
    },
    {
      fieldLabel: 'Фамилия',
      name: 'last',
      allowBlank: false,
      listeners: {
        afterrender: function() {
          if(this.up('window').userData) return;
          this.setValue('Пушкин');
        }
      }
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Возраст',
      value: 30,
      name: 'age',
    }
  ],

  dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    items: [
      {
        xtype: 'component',
        flex: 1
      },
      {
        xtype: 'button',
        text: 'Сброс',
        handler: function() {
          this.up('form').getForm().reset();
        }
      },
      {
        xtype: 'button',
        text: 'Сохранить',
        formBind: true,
        disabled: true,
        handler: function() {
          const form = this.up('form').getForm();
          const formFields = form.getValues();
          const personDataModel = Ext.create('Demo.model.Person', formFields);

          // TODO валидация через модель
          if(personDataModel.isValid()) {
            let gridStore = Ext.data.StoreManager.lookup('demoGridStore');
            formFields.name = {
              last: formFields.last,
              first: formFields.first
            };

            if(formFields.rowIndex === '') {
              gridStore.add(formFields);

            } else {
              let row = gridStore.getAt(formFields.rowIndex);
              row.set(formFields);
              row.commit();
            }

            this.up('window').close();

            // TODO Всплывашка
            Ext.create('Demo.view.main.Toast', {forceMsg: 'Сотрудник добавлен'}).show();

          } else {
            const errors = personDataModel.getValidation().getData();
            console.log(errors);
            Ext.Msg.show({
              title: 'Ошибка',
              message: 'Введенная информация, не прошла валидацию в модели данных. Для подробности смотрите консоль',
              buttons: Ext.Msg.OK,
              icon: Ext.Msg.ERROR,
            });
          }
        }
      }
    ]
  }],

  listeners: {
    afterrender: function (el) {
      const userData = this.up('window').userData;
      el.getForm().setValues(userData);
    }

  }

});
