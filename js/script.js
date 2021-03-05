

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });;


  let menu_button = document.querySelector('.header__burger');
  let menu_itself = document.querySelector('.header__menu');
  let menu_list = document.querySelector('.header__list');
  let body = document.querySelector('body');
  
  menu_button.onclick = function() {
    menu_button.classList.toggle('active');
    menu_itself.classList.toggle('active');
    body.classList.toggle('lock');
  };
  
  menu_list.onclick = function() {
    menu_button.classList.toggle('active');
    menu_itself.classList.toggle('active');
    body.classList.toggle('lock');
  };
  
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
  /*с подключением библиотеки jquery:
  
  $(document).ready(function() {
      $('.header__burger').click(function(event) {
          $('.header__burger,.header__menu').toggleClass('active');
          $('body').toggleClass('lock');
      });
  });
  
  // закрытие меню при клике на ссылку
  $(document).ready(function() {
      $('.header__list').click(function(event) {
          $('.header__burger,.header__menu').toggleClass('active');
          $('body').toggleClass('lock');
      });
  });*/
  
  