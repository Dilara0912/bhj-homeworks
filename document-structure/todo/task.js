const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const text = input.value;
    if(!text) return;

    const task = document.createElement('div');
    task.classList.add('task');

    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = text;

    const remove = document.createElement('a');
    remove.classList.add('task__remove');
    remove.href = "#";    
    remove.addEventListener('click', (e) => {
        e.preventDefault();
        tasksList.removeChild(task);
        saveTasks();
    })

    task.appendChild(title);
    task.appendChild(remove);
    tasksList.appendChild(task);  

    saveTasks();
})

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task__title').forEach(element => {
        tasks.push(element.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}