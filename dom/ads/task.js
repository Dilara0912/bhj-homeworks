const rotator = document.querySelectorAll('.rotator__case');
const arrayRotator = Array.from(rotator);
let activeIndex = 0;

setInterval(() => {
    arrayRotator[activeIndex].classList.remove('rotator__case_active');
    activeIndex = (activeIndex + 1) % arrayRotator.length;
    arrayRotator[activeIndex].classList.add('rotator__case_active');      
}, 1000)