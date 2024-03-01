const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.round(Math.random() * 16))]
    }
    document.querySelector('body').style.backgroundColor = color
}

let intId;

start.addEventListener('click',function(e){
    intId = setInterval(randomColor , 1000);
});

stop.addEventListener('click',function(e){
    clearInterval(intId);
    intId = null;
});