


let boton = document.getElementById("fondocompra")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    //Aca se ingresa el bloque de codigo que agrega al carrito 
    alert("Añadido al carrito!")
}


// Precios de cervezas

const Precios = [{
    "nombre": "Amber"
}];


//agrego un h3 con jQuery
$("fondocompra").prepend('<h3 style="display:none " > Agregado! </h3>');
//oculto usando fadeout todos los h3
$("h3").fadeOut("slow", function(){
    $("h3").fadeIn(1000);
    alert("Añadido!");
})

