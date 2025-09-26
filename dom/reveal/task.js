const reveal = document.querySelectorAll('.reveal');
const arrayReveals = Array.from(reveal);

window.addEventListener('scroll', () => {
    arrayReveals.forEach(item => {
        const rect = item.getBoundingClientRect();        
        if (rect.bottom < 0 || rect.top > window.innerHeight){
        return;
        } else {
        item.classList.add('reveal_active');
        }
    })
});



