function calcularFecha(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    //console.log("Los datos anotados fueron: " + dia + mes + anio);
    validar(dia, mes, anio);
}

function calcularMes(mes){
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

  return mesNumero = meses[mes.toLowerCase()];;

}

function obtenerFechaDeDate (anio, mesNumero, dia){
  return fecha = new Date(anio, mesNumero-1, dia);
}

function obtenerDia (fecha){
  let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  return diaSemana = diasSemana[fecha.getDay()];
}

function obtenerNumeroDia(diaSemana){
  const diasEnSemana = {
    'lunes': 1,
    'martes': 2,
    'miercoles': 3,
    'jueves': 4,
    'viernes': 5,
    'sabado': 6,
    'domingo': 7
  };
  return diaNumero = diasEnSemana[diaSemana.toLowerCase()];
}

function imprimirEnPantalla(diaNumero, diaSemana){
  switch (diaNumero){
    case 1:case 2:case 3:case 4:case 5:
        document.getElementById("fechaDia").innerHTML = "El dia fué " + diaSemana + " se laboró";
        break;
    case 6: case 7:
        document.getElementById("fechaDia").innerHTML = "El dia fué " + diaSemana + " no se laboró";
        break;
    default:
      document.getElementById("fechaDia").innerHTML = "Faltan datos";
}
}

function validar(dia, mes, anio){
  if(dia === "" || anio === "")
    document.getElementById("fechaDia").innerHTML = "Faltan datos, no se puede calcular el día ";
  else if(dia > 31)
    document.getElementById("fechaDia").innerHTML = "En un mes solo puede haber 31 días máximo, revisa el día ";
  else if(dia < 0)
    document.getElementById("fechaDia").innerHTML = "Los meses no tienen días negativos, revisa el día ";
  else if(anio < 1000 || anio > 3000)
    document.getElementById("fechaDia").innerHTML = "Este programa solo calcula del año 1000 al 3000, revisa el año ";
  else if(mes === "Febrero")
    anioBisiesto(dia, mes, anio);
  else
    procesoParaCalcularFecha(dia, mes, anio);
}

function procesoParaCalcularFecha(dia, mes, anio){
  let mesNumero = calcularMes(mes);
    //console.log("La fecha ingresada es: " + dia + mesNumero + anio);

    let fecha = obtenerFechaDeDate(anio, mesNumero, dia);
    //console.log("Fecha es: " + fecha);

    let diaSemana = obtenerDia(fecha);
    //console.log(diaSemana);
    
    let diaNumero = obtenerNumeroDia(diaSemana);
    //console.log(diaNumero);

    imprimirEnPantalla(diaNumero,diaSemana);
}

function anioBisiesto(dia, mes, anio){
  if((anio % 4) != 0){
    //console.log("No es bisiesto");
    //console.log(dia);
    if(dia == 29){
      //console.log("No se puede");
      document.getElementById("fechaDia").innerHTML = "El año " + anio + " no es bisiesto. Revisa tu día en el mes de Febrero";
    }
    else if (dia > 29){
      //console.log("No se puede mas de 29 dias");
      document.getElementById("fechaDia").innerHTML = "En el año " + anio + ", Febrero solo tiene 28 días (Año no bisiesto)";
    }else{
      procesoParaCalcularFecha(dia, mes, anio);
    }
  }else{
    console.log("Es bisiesto");
    if (dia > 29)
      document.getElementById("fechaDia").innerHTML = "En el año " + anio + ", Febrero solo tiene 29 días ( Año bisiesto)";
    else
      procesoParaCalcularFecha(dia, mes, anio);
  }
}