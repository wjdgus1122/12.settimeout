(function(){

    // *setTimeout
    // =>지정한 시간 내에 한번만 실행함
    // => setTimeout(() => {
    //     실행식 
    // }, 시간);

    // *setinterval
    // =>지정한 시간 마다 계속 실행함
    // =>setInterval(() => {
    //     실행식
    // }, 시간)

    // setTimeout(() => {
    //     document.write('2초뒤에 한번만 실행함')
    // }, 2000)

    // const handleTime = () => {
    //     document.write('한번만 실행ㅎㅎ')
    // }

    // setTimeout(handleTime, 2000);

    const btn = document.querySelector('button')
    const msg = document.querySelector('.msg_box')

    const handelbtn = () => {
        msg.classList.add('on')

        setTimeout(() => {
            msg.classList.remove('on')
        }, 1500);
    }

    btn.addEventListener('click', handelbtn)

})()//end