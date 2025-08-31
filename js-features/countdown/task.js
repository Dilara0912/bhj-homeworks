    let startTimer = 59;
    const timerStatus = document.getElementById('timer');

    let interval = setInterval(() => {
        if (startTimer > 0) {
        startTimer -= 1;
        timerStatus.textContent = startTimer;
        } else {
            clearInterval(interval);
            alert("Вы победили в конкурсе!");
        }               
    }, 1000);         
