const arrayTabs = Array.from(document.querySelectorAll('.tab '));
const arrayTabContent = Array.from(document.querySelectorAll('.tab__content'));

arrayTabs.forEach(tab => {
   tab.addEventListener('click', (event) => {
    const selectedTab = event.target;
    const index = arrayTabs.indexOf(selectedTab);
    arrayTabs.forEach(item => item.classList.remove('tab_active'));
    arrayTabContent.forEach(content => content.classList.remove('tab__content_active'));
    selectedTab.classList.add('tab_active');
    arrayTabContent[index].classList.add('tab__content_active');   
   }) 
})


