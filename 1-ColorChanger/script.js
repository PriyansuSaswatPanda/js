const btn=document.querySelectorAll('.button')
const body=document.querySelector('body')

btn.forEach(function(button){
    button.addEventListener('click',function(e){
        body.style.backgroundColor=e.target.id;
    })
})