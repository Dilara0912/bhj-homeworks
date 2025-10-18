const div = document.createElement('div');
div.classList.add('tooltip');
div.textContent = '';
document.body.appendChild(div);

const links = Array.from(document.querySelectorAll('.has-tooltip'));

let activeLink = null;

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        if(activeLink === link){ //У вас происходит клик по ссылке. Вам нужно проверить является ли это повторный клик по ссылке или клик по новой ссылке.
            div.classList.toggle('tooltip_active'); //Если текст совпадает, то был повторный клик по ссылке. В таком случае нужно просто инвертировать отображение подсказки, то есть выполнить toggle класса и завершить метод…Больше никаких действий выполнять не нужно.
            return;
        } //в условной конструкции, ветку else можно убрать, а действия реализовать после условной конструкции. Так получится меньше вложенности.
        //Если текст отличается, то был клик по другой подсказке. Следовательно вам нужно изменить текст в подсказке, позиционирование и отобразить элемент с помощью add класса.
        activeLink = link;
        div.textContent = link.getAttribute('title');
        div.classList.add('tooltip_active'); 

        const rect = link.getBoundingClientRect();
        div.style.position = 'absolute';
        div.style.left = rect.left + window.scrollX + 'px';
        div.style.top = rect.bottom + window.scrollY + 5 + 'px';
                          
    })
})

