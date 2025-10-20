const xhr = new XMLHttpRequest();
const title = document.querySelector('.poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('load', () => {
	if (xhr.status === 200) {
		console.log(xhr.responseText);
		const jsonData = JSON.parse(xhr.responseText);
		console.log(jsonData);

		title.textContent = jsonData.data.title;
		let arrayAnswers = jsonData.data.answers;

		arrayAnswers.forEach(e => {
			pollAnswers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
              ${e}
            </button>`)
		});
		const btns = document.querySelectorAll('.poll__answer')

		btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				btn.classList.toggle('active');
				alert('Спасибо, ваш голос засчитан!');
			})
		})
	} else {
		console.error('Ошибка:', xhr.status);
	}
})

xhr.send();