const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

window.addEventListener('load', loadTasks);

btn.addEventListener('click', (event) => {
	event.preventDefault();
	const title = input.value;
	if (!title) return;

	addTask(title);
	saveTasks();
	input.value = '';
})

function addTask(title) {
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