function numero(){
    // Generar un número aleatorio del 1 al 100
    let min = 1;
    let max = 100;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;// let n = Math.floor(Math.random() * 100);
    let bnd = 0;

    if(bnd ===0 )
        imprimirNumeroAleatorio(numeroAleatorio);
    

    /*if(validar)
        document.getElementById("numeroGenerado").innerHTML = mensaje1 + n + mensaje2;
    else
        pregunta = confirm("Es mayor?");
        if(pregunta)
            numero();
        else
            numero();
    */
}

function imprimirNumeroAleatorio(numeroAleatorio){
    // Preguntar al usuario si el número aleatorio es su número
    //validar = confirm("Tu numero es : " + numeroAleatorio + " ?");
    document.getElementById("pregunta").innerHTML = "¿Este es tu número?"
    document.getElementById("numeroGenerado").innerHTML = numeroAleatorio;
    ocultarBoton();
    addButtonSi();
    addButtonNo();
}

function ocultarBoton( ){
    const buttonRef = document.getElementById("button-genera");
    buttonRef.style.visibility = "hidden"; // ocultar elemento
}

function addButtonSi( ){
    const buttonRef = document.getElementById("button-si");
    buttonRef.style.visibility = "visible"; //visible
}

function addButtonNo( ){
    const buttonRef = document.getElementById("button-no");
    buttonRef.style.visibility = "visible"; //visible
}

function addButtonMayor(){

}

function ocultarBotonSi( ){
    const buttonRef = document.getElementById("button-si");
    buttonRef.style.visibility = "hidden"; // ocultar elemento
}

function ocultarBotonNo( ){
    const buttonRef = document.getElementById("button-no");
    buttonRef.style.visibility = "hidden"; // ocultar elemento
}


function fin(){
    let bnd = 1;
    ocultarBotonSi();
    ocultarBotonNo();
    document.getElementById("pregunta").innerHTML = " ";
    numero();
}

function mostrarNumero(){
    let mensaje1 = "Tu numero es ";
    let mensaje2 = ", excelente decision";
    document.getElementById("numeroGenerado").innerHTML = mensaje1 + numeroAleatorio + mensaje2;
}

function algoritimoBinario(){
        // Iterar mientras el número no sea adivinado
        while(validar !== true){
            pregunta = confirm("Es mayor?");
            
            // Si el usuario dice que el número es mayor
            if(pregunta)
                // El número aleatorio se convierte en el nuevo límite inferior
                min = numeroAleatorio + 1;
            
            // Si el usuario dice que el número es menor
            else
                // El número aleatorio se convierte en el nuevo límite superior
                max = numeroAleatorio - 1;
    
            // Generar un nuevo número aleatorio dentro de los nuevos límites
            numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            // Preguntar al usuario si el nuevo número es su número
            validar = confirm("Tu numero es : " + numeroAleatorio + " ?");
        }
    
        // Si el bucle se ha salido, significa que el número ha sido adivinado
        document.getElementById("numeroGenerado").innerHTML = mensaje1 + numeroAleatorio + mensaje2;
}