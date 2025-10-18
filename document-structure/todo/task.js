const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

window.addEventListener('load', loadTasks);//Если реализовали взаимодействие с локальным хранилищем, то при загрузке страницы стоит восстанавливать данные из локального хранилища.

btn.addEventListener('click', (event) => {
	event.preventDefault();
	const title = input.value.trim(); //Если ввести пробелы, то поле ввода будет не пустым, а следовательно проверка будет пропущена и будет добавлена задача с пробелами (без текста). Используйте trim() для удаления пробелов по бокам из строки.
	if (!title) return; // ничего не делаем, если поле пустое

	addTask(title);
	saveTasks();
	input.value = '';//Поле ввода стоит очищать при добавлении нового элемента задачи.
	
function addTask(title) {
	//ложные структуры старайтесь формировать с помощью шаблонных строк, а не поэлементно. Вместо всего вашего формирования можно использовать примерно такую структуру:
	tasksList.insertAdjacentHTML('afterbegin', `
    <div class="task">
      <div class="task__title">
      ${title}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `);

	const removeBtn = document.querySelector('.task__remove');
	removeBtn.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.closest('.task').remove();
		saveTasks();
	})
}

function saveTasks() {
	const tasks = [];
	document.querySelectorAll('.task__title').forEach(element => {
		tasks.push(element.textContent);
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
	const saved = JSON.parse(localStorage.getItem('tasks')) || [];

	saved.forEach(title => addTask(title));
}