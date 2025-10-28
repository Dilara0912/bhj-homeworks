const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userIdDiv = document.getElementById('user_id');

document.addEventListener('DOMContentLoaded', () => { //проверка наличия user_id в localStorage
	const savedId = localStorage.getItem('user_id');
	if (savedId) {
		userIdDiv.textContent = savedId;
		signin.classList.remove('signin_active'); // скрываем форму
		welcome.classList.add('welcome_active');
	}
})

form.addEventListener('submit', (e) => { //слушаем отправку формы
	e.preventDefault();

	const formData = new FormData(form); //создаю форм дату для отправки закодированных данных из формы

	const xhr = new XMLHttpRequest(); //создаю новый запрос без перезагрузки старницы
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth'); // инициализирую запрос

	xhr.addEventListener('load', () => { //слушаем запрос, когда он завершился и ответ получег от сервера
		if (xhr.status >= 200 && xhr.status < 300) { // успешный ответ
			const response = JSON.parse(xhr.responseText); //JSON.parse() превращает эту строку в объект JavaScript, чтобы можно было работать с его свойствами
			if (response.success) {
				const userId = response.user_id; // достаем ид из объекта response = { success: true, user_id: 333 }
				localStorage.setItem('user_id', userId);
				signin.classList.remove('signin_active'); // скрываем форму
				welcome.classList.add('welcome_active');
				userIdDiv.textContent = userId; //показать ид пользователя
			} else {
				alert('Неверный пароль/логин');
			}
		} else {
			alert('Ошибка сервера: ' + xhr.status);
		}
	})

	xhr.send(formData);
})