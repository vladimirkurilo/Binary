
$(document).ready(function(){

  // Smooth scroll and pageup

  $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
  });

  $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });


});

//TABS

(function($) {
    $(function() {
      
      $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
        $(this)
          .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
          .closest('div.container').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
      });
      
    });
    })(jQuery);

//HAMBURGER

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.main_hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('main_hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('main_hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})
