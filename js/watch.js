(function(){

    const hoursEl = document.querySelector('.hours')
    const minEl = document.querySelector('.min')
    const secEl = document.querySelector('.sec')
    const pEl = document.querySelector('p')

    

    setInterval(() => {
        const time = new Date();
        // =>날짜 및 시간을 가져옴
        
        const hours = String(time.getHours()).padStart(2,'0'); 
        // =>시간을 가져옴
        const min = String(time.getMinutes()).padStart(2,'0');
        // =>분을 가져옴
        const sec = String(time.getSeconds()).padStart(2,'0');
        // =>초을 가져옴
        // hoursEl.innerHTML = hours
        // minEl.innerHTML = min
        // secEl.innerHTML = sec
        pEl.innerHTML = `${hours} : ${min} : ${sec}`
    }, 1000);
    

})()