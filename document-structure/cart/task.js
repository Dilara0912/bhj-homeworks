const products = document.querySelectorAll('.product');

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
        if(countValue > 1){
        value.textContent = countValue - 1; 
        }
    });

    const productAdd = product.querySelector('.product__add');

    productAdd.addEventListener('click', () => {
        const productId = product.dataset.id;
        const bin = document.querySelector('.cart__products');
        
        let productInBin = bin.querySelector(`.cart__product[data-id="${productId}"]`);

        if(productInBin){
            const countDiv = productInBin.querySelector('.cart__product-count');
            countDiv.textContent = Number(countDiv.textContent) + Number(value.textContent);
        } else {
            const div = document.createElement('div');
            div.classList.add('cart__product');        
            div.dataset.id = productId;

            const img = document.createElement('img');
            img.classList.add('cart__product-image');        
            let productImg = product.querySelector('.product__image');
            img.src = productImg.src;

            const divCount = document.createElement('div');
            divCount.classList.add('cart__product-count');
            divCount.textContent = value.textContent;
        
            div.appendChild(img);
            div.appendChild(divCount);
            bin.appendChild(div);
        }
    })
})


