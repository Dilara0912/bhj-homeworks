const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = document.querySelectorAll('.dropdown__link');
const arrayFromLinks = Array.from(dropdownLink);

dropdownValue.addEventListener('click', (() => {
    dropdownList.classList.toggle('dropdown__list_active')
})
)

arrayFromLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();        
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    })
})






