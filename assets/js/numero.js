function numero(){
    let min = 1;
    let max = 100;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;// let n = Math.floor(Math.random() * 100);
    let mensaje1 = "Tu numero es ";
    let mensaje2 = ", excelente decision";

    validar = confirm("Tu numero es : " + numeroAleatorio + " ?");

    while(validar !== true){
        pregunta = confirm("Es mayor?");
        if(pregunta)
            min = numeroAleatorio + 1;
        else
            max = numeroAleatorio - 1;

        
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        validar = confirm("Tu numero es : " + numeroAleatorio + " ?");
    }

    document.getElementById("numeroGenerado").innerHTML = mensaje1 + numeroAleatorio + mensaje2;
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