$(document).ready(function () {

  /* =============================== */
  /* fade checkbox for resize window */
  /* =============================== */

  $(window).on('resize', function () {
    if ($(window).width() > 630) {
      $('#burger').prop('checked', false);
    }
  });

  $('.navbar__link').on('click', function () {
    $('body').css('overflow', 'auto');
    $('.modal').css('display', 'none');
    $('#burger').prop('checked', false);
  });

  $('#burger').on('click', function () {
    if ($('#burger').prop('checked')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'auto')
    }   
  })

  /* ============================= */
  /* control active link on scroll */
  /* ============================= */

  var lastId,
    topMenu = $(".navbar__list"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop 
    }, 1500);
    e.preventDefault();
  });

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  /* ============================= */
  /* connection plugin of typed.js */
  /* ============================= */

  var typed = new Typed('.intro__text', {
    strings: ["Frontend разработчик", "Веб-дизайнер"],
    startDelay: 200,
    typeSpeed: 160,
    backSpeed: 80,
    backDelay: 100,
    loop: true,
    showCursor: false
  })

});

