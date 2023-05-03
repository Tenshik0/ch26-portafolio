function calcularFecha(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;

    const meses = {
        'enero': 1,
        'febrero': 2,
        'marzo': 3,
        'abril': 4,
        'mayo': 5,
        'junio': 6,
        'julio': 7,
        'agosto': 8,
        'septiembre': 9,
        'octubre': 10,
        'noviembre': 11,
        'diciembre': 12
      };

    let mesNumero = meses[mes.toLowerCase()];

    //console.log(dia,mesNumero, anio);
    

    let fecha = new Date(anio, mesNumero-1, dia);
    //console.log(fecha);

    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let diaSemana = diasSemana[fecha.getDay()];
    //console.log(diaSemana);
    
    const diasEnSemana = {
        'lunes': 1,
        'martes': 2,
        'miercoles': 3,
        'jueves': 4,
        'viernes': 5,
        'sabado': 6,
        'domingo': 7
      };

    let diaNumero = diasEnSemana[diaSemana.toLowerCase()];

    //console.log(diaNumero);

    switch (diaNumero){
        case 1:case 2:case 3:case 4:case 5:
            document.getElementById("fechaDia").innerHTML = "El dia fue " + diaSemana + " se labora";
            break;
        case 6: case 7:
            document.getElementById("fechaDia").innerHTML = "El dia fue " + diaSemana + " no se labora";
            break;
    }

}