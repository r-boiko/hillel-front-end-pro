// -- Чтение из document.cookie --
//
// // На javascript.info мы используем сервис Google Analytics для сбора статистики,
// // поэтому какие-то куки должны быть
// alert( document.cookie ); // cookie1=value1; cookie2=value2;...
//
// -- Запись в document.cookie --
//
// document.cookie = "user=John"; // обновляем только куки с именем 'user'
// alert(document.cookie); // показываем все куки
//
// -- --
//
// // специальные символы (пробелы), требуется кодирование
// let name = "my name";
// let value = "John Smith"
//
// // кодирует в my%20name=John%20Smith
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
//
// alert(document.cookie); // ...; my%20name=John%20Smith
//
// -- --
//
// document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
//
// -- path, domain --
//
// // на site.com
// document.cookie = "user=John"
//
// // на forum.site.com
// alert(document.cookie); // нет user
//
// -- --
//
// // находясь на странице site.com
// // сделаем куки доступным для всех поддоменов *.site.com:
// document.cookie = "user=John; domain=site.com"
//
// // позже
//
// // на forum.site.com
// alert(document.cookie); // есть куки user=John
//
// -- expires --
//
// +1 день от текущей даты
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;
//
// -- max-age --
//
// // куки будет удалено через 1 час
// document.cookie = "user=John; max-age=3600";
//
// // удалим куки (срок действия истекает прямо сейчас)
// document.cookie = "user=John; max-age=0";
//
// -- secure --
//
// // предполагается, что сейчас мы на https://
// // установим опцию secure для куки (куки доступно только через HTTPS)
// document.cookie = "user=John; secure";
//
// -- samesite --
//
// samesite=strict (или, что то же самое, samesite без значения)
// Куки с samesite=strict никогда не отправятся, если пользователь пришёл не с этого же сайта.
//
// samesite=lax
// Это более мягкий вариант, который также защищает от XSRF и при этом не портит впечатление от использования сайта.
//
// -- httpOnly --
//
// Веб-сервер использует заголовок Set-Cookie для установки куки. И он может установить настройку httpOnly.
// Эта настройка запрещает любой доступ к куки из JavaScript. Мы не можем видеть такое куки или манипулировать им с помощью document.cookie.
