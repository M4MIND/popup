
/** 
 * Замкнутая функция нужна, чтобы инкапсулировать переменные и прочее внутри нее.
 * Так ты ограничишь к ним доступ
 * Прочитай https://tproger.ru/translations/js-modules-formats-loaders-builders/
 * 
 * Такой подход используется в React и т.д, просто для понимания зачем и нахрена
 */


// ЭТО ПРОСТО ПРИМЕР, ИЗМЕНЯЙ ЕГО КАК УДОБНО, Я УПУСТИЛ МНОГО ДЕТАЛЕЙ
var popup = (function() {

    // Главный уровень абстракции, он всем и занимается, создает попапы, хранит их у себя в массиве если необходимо и т.д
    // Обрати внимание что ты всегда его можешь расширить
    var app = {
        success: function() {
            // Показать попап что все успешно
        },
        error: function() {
            // Показать попап что чет пошло не так
        },
        alert: function() {
            // Показать попап уведомлялку
        },
        confirm: function() {
            // Бонус, показать окно у которого будут две кнопки да / нет. На них должна быть реакция.
            // Пример popup.confirm(title, description, titleForTrueButton, titleForFalseButton, callback);
            // В callback нужно передать какая кнопка была нажата

            /* popup.confirm(..., function(value) {
                if (value) {
                    // Тут что-то произойдет если пользователь нажал да
                }
                else {
                    // Если нет
                }
            }) */
        }
    }

    // Конструктор попапов
    // Это функция будет принимать аргументы и создать объекты попапов
    var _popup = function(title, description, ...) {
        return {
            show: function() {

            },

            hide: function() {

            },
            
            close: function() {

            }
            //.....
        }
    }

    /** Здесь ты можешь определять какие методы и свойства будут доступны из вне */
    var _public_interface = {
        success: app.success,
        error: app.error,
        alert: app.alert,
        confirm: app.confirm
    };


    return _public_interface;

    /* Или так */
    return {
        success: app.success,
        error: app.error,
        alert: app.alert,
        confirm: app.confirm
    }
})();

// Пример работы
popup.success('title', 'description', function(popup){ 
    // Функция должна вернуть объект popup чтобы ты мог с ним взаимодействовать в коллбэке... Мы же пишем модуль с удобным интерфейсом
})

popup.confirm('title', 'description', 'Да', 'Нет', function(popup, value) {
    // Функция должна вернуть объект popup и какую кнопку жмякнул пользователь, чтобы обработать его выбор
});