function getHole(index) {
  return document.getElementById(`hole${index}`);  
}

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function resetGame() {
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function () {
    if (hole.classList.contains('hole hole_has-mole')) {      
      deadCounter.textContent = parseInt(deadCounter.textContent) + 1;
    } else {     
      lostCounter.textContent = parseInt(lostCounter.textContent) + 1;
    }

    if (parseInt(deadCounter.textContent) >= 10) {
      alert('Победа!');
      resetGame();
    }

    if (parseInt(lostCounter.textContent) >= 5) {
      alert('Вы проиграли!');
      resetGame();
    }
  };
}