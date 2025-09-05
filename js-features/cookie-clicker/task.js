const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.addEventListener("click", function () {
  cookie.width = ++clickerCounter.textContent % 2 ? 250 : 200;
});

// const clickerTab = document.getElementById('cookie');

// clickerTab.onclick = function(){
//     const counter = document.getElementById('clicker__counter');
//     let counterValue = parseInt(counter.textContent);
//     counterValue += 1;
//     counter.textContent = counterValue;

//     const image = document.getElementById('cookie');
//     if(image.width === 200){
//         image.width = 190;
//     } else {
//         image.width = 200;
//     }    
// }


