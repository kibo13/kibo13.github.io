/* ================== */
/*   Options jQuery   */
/* ================== */

$(document).ready(function () {

  /* ============================= */
  /* connection plugin of typed.js */
  /* ============================= */

  var typed = new Typed('.typed', {
    strings: ["Frontend разработчик"],
    startDelay: 500,
    typeSpeed: 200
  })

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

  /* ================================= */
  /* options for toggler block of test */
  /* ================================= */

  $('.toggle__btn').on('click', function () {
    var get_id = this.id,
      get_current = $('.test__list .' + get_id);

    $('.test__list .test__item').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#all').on('click', function () {
    $('.test__list .test__item').show(500);
  });

  var follow_btn = $('.toggle__btn');

  follow_btn.on('click', function () {
    follow_btn.removeClass('active');
    $(this).addClass('active');
  });

});

/* ====================== */
/*   Options JavaScript   */
/* ====================== */

  /* ============ */
  /*   preloader  */
  /* ============ */

  document.body.onload = function () {
    setTimeout(function () {
      let preloader = document.getElementById('preloader');
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 1000);
  }

$(document).ready(function () {

  const BODY = document.querySelector('body');

  /* ========= */
  /*   modal   */
  /* ========= */

  var mModal  = document.getElementById('modal'),
      mInput  = document.getElementById('m-input'),
      mImg    = document.getElementById('m-img'),
      mClose  = document.getElementById('m-close'),
      mTitle  = document.getElementById('m-title'),
      mAim    = document.getElementById('m-aim'),
      mToDo   = document.getElementById('m-todo'),
      mTool   = document.getElementById('m-tool'),
      mResult = document.getElementById('m-result'),
      mLink   = document.getElementById('m-link'),
      storage = JSON.parse(`
        {
          "data": {
						"1": {
              "title"  : "Фабрика скинали",
              "img"    : "img/modal/modal-04.jpg",
							"link"   : "https://kibo13.github.io/skinali/",
							"aim"    : "разработать адаптивный сайт с использованием методологии БЭМ.",
							"todo"   : "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, адаптивный таймлайн и плавная прокрутка целевой страницы. Выполнена оптимизация файлов(изображений, js, css) для уменьшения времени загрузки сайта.",
							"tool"   : "HTML, CSS, SASS, jQuery, JavaScript, GitHub, Photoshop, Yandex Map API, Google PageSpeed Insights.",
							"result" : "освоил разработку сайта по методологии БЭМ. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов. При работе над проектом активно использовалась система контроля версий Git."
						},
						"2": {
              "title"  : "Advoagency",
              "img"    : "img/modal/modal-03.jpg",
							"link"   : "https://kibo13.github.io/advoagency/",
							"aim"    : "разработать адаптивный сайт с использованием методологии БЭМ.",
							"todo"   : "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер и плавная прокрутка целевой страницы. Выполнена оптимизация файлов(изображений, js, css) для уменьшения времени загрузки сайта.",
							"tool"   : "HTML, CSS, SASS, JavaScript, jQuery, Photoshop, GitHub, Google PageSpeed Insights.",
							"result" : "освоил разработку сайта по методологии БЭМ. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов. При работе над проектом активно использовалась система контроля версий Git."
						},
						"3": {
              "title"  : "Degcompany",
              "img"    : "img/modal/modal-01.jpg",
							"link"   : "https://kibo13.github.io/degcompany/",
							"aim"    : "разработать адаптивный сайт с применением технологии Flexbox и Grid.",
							"todo"   : "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, плавная прокрутка целевой страницы и форма обратной связи с проверкой на корректность вводимых данных (валидация формы).",
							"tool"   : "HTML, CSS, SCSS, Koala, JavaScript, jQuery, GitHub",
							"result" : "освоил разработку сайта c применением технологии Flexbox и Grid. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов."
						},
						"4": {
              "title"  : "Skyup",
              "img"    : "img/modal/modal-02.jpg",
							"link"   : "https://kibo13.github.io/skyup/",
							"aim"    : "разработать адаптивный сайт с использованием сетки Bootstrap.",
							"todo"   : "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, параллакс эффект и плавная прокрутка целевой страницы.",
							"tool"   : "Bootstrap, HTML, CSS, SCSS, Koala, JavaScript, jQuery, GitHub, Google Map API.",
							"result" : "освоил разработку сайта c применением инструментов Bootstrap. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов."
						}
          }
        }
      `);

  function openWindow(el) {
    var id = el.dataset.winId,
      data = storage.data[id];

    createWindow(data, id);
  }

  function createWindow(data, id) {
    mTitle.innerHTML      = data.title;
    mLink.href            = data.link;
    mLink.innerHTML       = data.link;
    mInput.value          = data.link;
    mImg.src              = data.img;
    mAim.innerHTML        = data.aim;
    mToDo.innerHTML       = data.todo;
    mTool.innerHTML       = data.tool;
    mResult.innerHTML     = data.result;
    mModal.style.display  = 'flex';
    BODY.style.overflow   = 'hidden';
  }

  document.querySelector('.portfolio').addEventListener('click', function (e) {
    let target = e.target;

    if (!target.closest('.portfolio__link') || target.dataset.winId === undefined)
      return;

    openWindow(target);
  });

  mClose.addEventListener('click', function (e) {
    mModal.style.display = 'none';
    BODY.style.overflow = 'auto';
  });

});