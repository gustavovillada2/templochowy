window.addEventListener('scroll',function(){
    
    var imagensita = document.querySelectorAll('.fade_up');//tomamos los elementos con esa clase.
    
    var altura = window.innerHeight/1.1;//Capturamos la altura de la ventana, no importa que se reduzca. captura la nueva altura.
        console.log(altura)

    
    
    
    
    for(var i = 0 ; i<imagensita.length; i++){
        var distancia = imagensita[i].getBoundingClientRect().top;
        console.log(distancia)

        imagensita[i].classList.add('transform_up');

        if(distancia <= altura){

            imagensita[i].classList.add('aparece');

        }else{
            imagensita[i].classList.remove('aparece');
        }
                        
                        
    }

})