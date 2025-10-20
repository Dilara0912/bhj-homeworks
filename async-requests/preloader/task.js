const item = document.querySelector('.item');
const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.addEventListener('load', () => {
	if (xhr.status === 200) {
		//console.log(xhr.responseText);    
		const data = JSON.parse(xhr.responseText);
		//console.log(data);

		const valutes = data.response.Valute;

		for (const key in valutes) {
			const value = valutes[key];
			item.insertAdjacentHTML('beforeend', `
           <div class="item__block">
                <div class="item__code">
                ${value.CharCode}
                </div>
                <div class="item__value">
                ${value.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>`)
		}
		loader.classList.remove('loader_active');
	} else {
		console.error('Ошибка загрузки:', xhr.status);
	}
})

xhr.send();