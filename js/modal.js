window.onload = function () {

	var body = document.querySelector('body'),
			mModal = document.querySelector('.modal'),
			mClose = mModal.querySelector('#close'),
			mTitle = mModal.querySelector('.modal__title'),
			mLink = mModal.querySelector('#link'),
			mAim = mModal.querySelector('.modal__aim'),
			mToDo = mModal.querySelector('.modal__todo'),
			mTool = mModal.querySelector('.modal__tool'),
			mResult = mModal.querySelector('.modal__result'),
			storage = JSON.parse(`
        {
          "data": {
						"1": {
							"title": "Фабрика скинали",
							"link": "https://kibo13.github.io/skinali/",
							"aim": "разработать адаптивный сайт с использованием методологии БЭМ.",
							"todo": "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, адаптивный таймлайн и плавная прокрутка целевой страницы. Выполнена оптимизация файлов(изображений, js, css) для уменьшения времени загрузки сайта.",
							"tool": "HTML, CSS, SASS, jQuery, JavaScript, GitHub, Photoshop, Yandex Map API, Google PageSpeed Insights.",
							"result": "освоил разработку сайта по методологии БЭМ. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов. При работе над проектом активно использовалась система контроля версий Git."
						},
						"2": {
							"title": "Advoagency",
							"link": "https://kibo13.github.io/advoagency/",
							"aim": "разработать адаптивный сайт с использованием методологии БЭМ.",
							"todo": "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер и плавная прокрутка целевой страницы. Выполнена оптимизация файлов(изображений, js, css) для уменьшения времени загрузки сайта.",
							"tool": "HTML, CSS, SASS, JavaScript, jQuery, Photoshop, GitHub, Google PageSpeed Insights.",
							"result": "освоил разработку сайта по методологии БЭМ. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов. При работе над проектом активно использовалась система контроля версий Git."
						},
						"3": {
							"title": "Degcompany",
							"link": "https://kibo13.github.io/degcompany/",
							"aim": "разработать адаптивный сайт с применением технологии Flexbox и Grid.",
							"todo": "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, плавная прокрутка целевой страницы и форма обратной связи с проверкой на корректность вводимых данных (валидация формы).",
							"tool": "HTML, CSS, SCSS, Koala, JavaScript, jQuery, GitHub",
							"result": "освоил разработку сайта c применением технологии Flexbox и Grid. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов."
						},
						"4": {
							"title": "Skyup",
							"link": "https://kibo13.github.io/skyup/",
							"aim": "разработать адаптивный сайт с использованием сетки Bootstrap.",
							"todo": "разработан адаптивный сайт. Добавлены CSS-анимации (прелоадер, ссылки, меню, кнопки), а также слайдер, параллакс эффект и плавная прокрутка целевой страницы.",
							"tool": "Bootstrap, HTML, CSS, SCSS, Koala, JavaScript, jQuery, GitHub, Google Map API.",
							"result": "освоил разработку сайта c применением инструментов Bootstrap. Более детально изучил использование JavaScript/JQuery для создания интерактивных элементов."
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
		mTitle.innerHTML = data.title;
		mLink.href = data.link;
		mAim.innerHTML = data.aim;
		mToDo.innerHTML = data.todo;
		mTool.innerHTML = data.tool;
		mResult.innerHTML = data.result;
		mModal.style.display = 'flex';
		body.style.overflow = 'hidden';
	}

	document.querySelector('.portfolio').addEventListener('click', function (e) {
		let target = e.target;

		if (!target.closest('.portfolio__link') || target.dataset.winId === undefined)
			return;

		openWindow(target);
	});

	mClose.addEventListener('click', function (e) {
		mModal.style.display = 'none';
		body.style.overflow = 'auto';
	});


}