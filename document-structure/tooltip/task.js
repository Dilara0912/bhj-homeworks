const div = document.createElement('div');
div.classList.add('tooltip');
div.textContent = '';
document.body.appendChild(div);

const links = Array.from(document.querySelectorAll('.has-tooltip'));

let activeLink = null;

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        if(activeLink === link){
            div.classList.toggle('tooltip_active'); 
            return;
        } else {
            activeLink = link;
            div.textContent = link.getAttribute('title');
            div.classList.add('tooltip_active'); 

            const rect = link.getBoundingClientRect();
            div.style.position = 'absolute';
            div.style.left = rect.left + window.scrollX + 'px';
            div.style.top = rect.bottom + window.scrollY + 5 + 'px';
        }                   
    })
})

