## ExtJs6.6_CRUD_grid

## Фронтенд CRUD интерфейс для работы со списком сотрудников взятом из json-файла.

#### Файл <a href="https://github.com/BogdanovSergey/ExtJs6.6_CRUD_grid/raw/master/build.zip">build.zip</a> содержит собранный проект готовый для просмотра.

Реализованы следующие функции:
- окно авторизации;
- вкладка с таблицей-списком сотрудников;
- создание и редактирование (uuid генерируется автоматом);
- сущность Person выделена в Ext.data.Model, при сохранении хотел сделать дополнительную валидацию с моделью, не доделал, но и не требовалось;
- удаление разовое (по нажатию красной иконки);
- удаление массовое (чекбокс сохраняется в sessionStorage, получилось избыточно, можно было проще);
- оповещение о действиях отражается через Ext.Toast
- колонка аватар: показывает две картинки в зависимости от возраста (<>35)
- колонка агрегатор: фамилия, инициал;
- редактирование при двойном клике и при нажатии на иконку;