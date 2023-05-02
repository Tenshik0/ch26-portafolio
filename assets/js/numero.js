function numero(){
    let n = Math.floor(Math.random() * 100);
    let mensaje1 = "Tu numero es ";
    let mensaje2 = ", excelente decision";

    validar = confirm("Tu numero es : " + n + " ?");

    if(validar)
        document.getElementById("numeroGenerado").innerHTML = mensaje1 + n + mensaje2;
    else
        numero();
}