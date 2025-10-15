const products = document.querySelectorAll('.product');

window.addEventListener('load', loadTasks);

products.forEach(product => {
	const decBtn = product.querySelector('.product__quantity-control_dec');
	const incBtn = product.querySelector('.product__quantity-control_inc');
	const value = product.querySelector('.product__quantity-value');

	incBtn.addEventListener('click', () => {
		let countValue = parseInt(value.textContent);
		value.textContent = countValue + 1;
	});

	decBtn.addEventListener('click', () => {
		let countValue = parseInt(value.textContent);
		if (countValue > 1) {
			value.textContent = countValue - 1;
		}
	});

	const productAdd = product.querySelector('.product__add');

	productAdd.addEventListener('click', () => {
		const productId = product.dataset.id;
		const bin = document.querySelector('.cart__products');

		let productInBin = bin.querySelector(`.cart__product[data-id="${productId}"]`);

		if (productInBin) {
			const countDiv = productInBin.querySelector('.cart__product-count');
			countDiv.textContent = Number(countDiv.textContent) + Number(value.textContent);
		} else {
			const productImg = product.querySelector('.product__image').src;
			addTask(productId, productImg, value.textContent);
		}

		saveTasks();
	})
})

function addTask(id, img, count) {
	document.querySelector('.cart__products').insertAdjacentHTML('afterbegin', `
        <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>
              </div>
              `);
}

function saveTasks() {
	const tasks = [];
	document.querySelectorAll('.cart__product').forEach(element => {
		const id = element.dataset.id;
		const img = element.querySelector('.cart__product-image').src;
		const count = element.querySelector('.cart__product-count').textContent;
		tasks.push({
			id,
			img,
			count
		});
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
	const saved = JSON.parse(localStorage.getItem('tasks')) || [];

	saved.forEach(task => addTask(task.id, task.img, task.count));
}