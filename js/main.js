//Создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//Создаем переменную в которою кладем меню
let menu = document.querySelector('.sidebar')
//Отслеживем клик по кнопке меню
menuToggle.addEventListener('click', function (event){
//отменяем стандартное поведение ссылки
    event.preventDefault();
    // dtiftv rkfcc yf vty. rjulf rkbrftv yf ccskre
    menu.classList.toggle('visible');

})
