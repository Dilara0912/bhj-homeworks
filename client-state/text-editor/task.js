const redactor = document.getElementById('editor');
const storedText = localStorage.getItem('text');

if (storedText){
    redactor.value = storedText;
}

redactor.addEventListener('input', () => {     
    const text = document.getElementById('editor').value;    
    localStorage.setItem('text', text);
})
