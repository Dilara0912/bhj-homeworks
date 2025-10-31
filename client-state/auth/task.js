const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userIdDiv = document.getElementById('user_id');

function removeForm() {
	signin.classList.remove('signin_active'); // скрываем форму
	welcome.classList.add('welcome_active');
}

document.addEventListener('DOMContentLoaded', () => { //проверка наличия user_id в localStorage
	const savedId = localStorage.getItem('user_id');
	if (savedId) {
		userIdDiv.textContent = savedId;
		removeForm();
	}
})

form.addEventListener('submit', (e) => { //слушаем отправку формы
	e.preventDefault();

	const formData = new FormData(form); //создаю форм дату для отправки закодированных данных из формы

	const xhr = new XMLHttpRequest(); //создаю новый запрос без перезагрузки старницы
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); // инициализирую запрос
	xhr.responseType = 'json'; //в свойстве response уже будет готовый объект и его не придётся дополнительно парсить с помощью JSON.parse


	xhr.addEventListener('load', () => { //слушаем запрос, когда он завершился и ответ получег от сервера
		// if (xhr.status >= 200 && xhr.status < 300) { // успешный ответ
		// const response = JSON.parse(xhr.responseText); //JSON.parse() превращает эту строку в объект JavaScript, чтобы можно было работать с его свойствами
		const response = xhr.response; //место xhr.responseText используйте xhr.response, который уже содержит распарсенный JSON-объект.здесь response - именно в обрабочике- уже актуален 

		if (response.success) {
			const userId = response.user_id; // достаем ид из объекта response = { success: true, user_id: 333 }
			localStorage.setItem('user_id', userId);
			removeForm();
			userIdDiv.textContent = userId; //показать ид пользователя
		} else {
			alert('Неверный пароль/логин');
			alert('Ошибка сервера: ' + xhr.status);
		}
	})
	xhr.send(formData);
})