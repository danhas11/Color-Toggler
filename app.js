let toggler = document.getElementById('switch')
toggler.addEventListener('click' , ()=>{
    if(toggler.checked === true){
        document.body.style.background = 'black'
    }
    else{
        document.body.style.background = 'white'
    }
})