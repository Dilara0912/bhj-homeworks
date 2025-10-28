const modalWindow = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function setCookie(name, value, days = 1) { //устанавливает куки
	const date = new Date();
	date.setDate(date.getDate() + days);
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) { //читает значение куки по имени
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

document.addEventListener('DOMContentLoaded', (e) => {
	if (!getCookie('modalClosed')) { // Показываем окно, если посетитель первый раз - значит куки нет
		modalWindow.classList.add('modal_active');
	}
})

modalClose.addEventListener('click', (e) => { // при клике на крестик закрываем окно и сохраняем cookie
	e.preventDefault();
	modalWindow.classList.remove('modal_active');
	setCookie('modalClosed', 'true');
})

