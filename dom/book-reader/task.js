const fontSize = document.querySelectorAll('.font-size');
const arrayFontSize = Array.from(fontSize);
const book = document.querySelector('.book');

arrayFontSize.forEach(item =>{
    item.addEventListener('click', (event) => {
        event.preventDefault();

        arrayFontSize.forEach(el => {            
            el.classList.remove('font-size_active'); 
            
        });

        item.classList.add('font-size_active');     
        
        book.classList.remove('book_fs-big', 'book_fs-small'); 
      

        if(item.classList.contains('font-size_small')){
            book.classList.add('book_fs-small'); 
        } 
        if(item.classList.contains('font-size_big')){
            book.classList.add('book_fs-big'); 
        }      
    })
})


