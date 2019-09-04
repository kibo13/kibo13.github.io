document.body.onload = function () {
  /**
      * loader
   */

  setTimeout(function () {
    let preloader = document.getElementById('loader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
      document.querySelector('body').style.overflow = 'auto'
    } else {
      document.querySelector('body').style.overflow = 'hidden'
    }
  }, 1000); 
}

function ready(callback) {
  
  // in case the document is already rendered
  if (document.readyState != 'loading') callback();

  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);

  // IE <= 8
  else document.attachEvent('onreadystatechange', function () {
    if (document.readyState == 'complete') callback();
  });
}

ready(function () {

  // body 
  const body = document.querySelector('body');

  // modules 
  const mNavbar = document.getElementById('navbar');
  const mResume = document.getElementById('about');

  // buttons 
  const bHTML = document.getElementById('html-sort');
  const bCSS = document.getElementById('css-sort');
  const bJS = document.getElementById('js-sort');
  const bResumeShow = document.getElementById('resume-show');
  const bResumeHide = document.getElementById('resume-hide');

  // data (array)
  const works = document.querySelector('.works-list');

  /**
      * Отрисовка тэгов для карточек
   */

  PrintTags();

  function PrintTags() {
    for (let i = 0; i < works.children.length; i++) {
      let tag = document.createElement('div');
      switch (+works.children[i].getAttribute('data-index')) {
        case 1:
          tag.classList.add('tag', 'tag--html');
          tag.innerHTML = 'Сайт';
          works.children[i].childNodes[1].appendChild(tag);
          break;

        case 2:
          tag.classList.add('tag', 'tag--css');
          tag.innerHTML = 'Анимация';
          works.children[i].childNodes[1].appendChild(tag);
          break;

        case 3:
          tag.classList.add('tag', 'tag--js');
          tag.innerHTML = 'Приложение';
          works.children[i].childNodes[1].appendChild(tag);
          break;

        default:
          tag.classList.add('tag', 'tag--soon');
          tag.innerHTML = 'Скоро';
          works.children[i].childNodes[1].appendChild(tag);
          break;
      }
    }
  }

  /**
      * Сортировка карточек   
   */

  bHTML.addEventListener('click', function () {
    let ElemID = bHTML.getAttribute('data-index');
    filterWorks(ElemID);
  });

  bCSS.addEventListener('click', function () {
    let ElemID = bCSS.getAttribute('data-index');
    filterWorks(ElemID);
  });

  bJS.addEventListener('click', function () {
    let ElemID = bJS.getAttribute('data-index');
    filterWorks(ElemID);
  });

  function filterWorks(ElemID) {
    for (let i = 0; i < works.children.length; i++) {
      for (let j = i; j < works.children.length; j++) {
        if (+works.children[i].getAttribute('data-index') != ElemID) {
          replaceNode = works.replaceChild(works.children[j], works.children[i]);
          insertAfter(replaceNode, works.children[i]);
        }
      }
    }
  }

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
  }

  /**
      * вешаем обработчик событий на кнопку btn_show
      * 1. скрываем navbar на главной странице
      * 2. раскрываем секцию about  
      * 3. убираем полосу прокрутки у тэга body 
   */

  bResumeShow.addEventListener('click', function () {
    mNavbar.style.display = 'none';
    mResume.style.display = 'block';
    body.style.overflow = 'hidden';
  });

  /**
      * вешаем обработчик событий на кнопку btn_hide
      * 1. скрываем секцию about
      * 2. раскрываем navbar на главной странице 
      * 3. возвращаем полосу прокрутки тэгу body
  */

  bResumeHide.addEventListener('click', function () {
    mResume.style.display = 'none';
    mNavbar.style.display = 'flex';
    body.style.overflow = 'auto';
  });

});

