const redactor = document.getElementById('editor');
const storedText = localStorage.getItem('text');
redactor.value = storedText;
// if (storedText){
//     redactor.value = storedText;
// }

redactor.addEventListener('input', () => {     
    const text = redactor.value;    
    localStorage.setItem('text', text);
})
