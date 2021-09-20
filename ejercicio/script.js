//Capturo el boton
let btn= document.getElementById('btn');


//Escucho el click en el boton y realizo una funcion flecha
btn.addEventListener('click',()=> {
    const compra = document.getElementById('valor').value
    //Si el valor del descuento es mayor o igual a 150mil 
    if(compra >= 150000) {
        //Calculamos el descuento
        descuento = compra - (compra * 0.20)
        //Y le mostramos el descuento y la cantidad final que debe paga
        alert(`Su compra tiene un descuenyo del 20% y debe pagar ${descuento}`)

        //Lo enviamos al localStorage
        localStorage.setItem('Compra', descuento)
    //SI no le mostramos que no tiene ningun descuento
    }else{
        alert('Su compra no tiene descuento')
        localStorage.setItem('Compra', compra)
    }
});

