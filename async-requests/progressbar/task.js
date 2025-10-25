const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

	xhr.upload.onprogress = function(event) {
		if (event.lengthComputable) {
			const percent = (event.loaded / event.total) * 100;
			progress.value = percent;
		}
	}

	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 201) {
			console.log('Успешная загрузка: ', xhr.status);
			progress.value = 100;
		} else {
			console.error('Ошибка:', xhr.status);
		}
	}
	const formData = new FormData(form);

	xhr.send(formData);
});