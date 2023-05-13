const url = "https://reqres.in/api/users?delay=3";

// Variables globales
var tablaCargada = false;
const tablaUsuarios = document.getElementById("tabla-usuarios");
const filas = tablaUsuarios.getElementsByTagName('tr');

const getUsuariosPrb = () => {
    fetch( url )
        .then( response=> response.json()  )
        .then( users => {
            console.log(users.data)
        } )
        .catch( error => console.log(error) );   
}


const getUsuarios = () => {
    const loading = document.getElementById("loading");
    loading.style.display = "block"; // Mostrar el efecto de carga

    if (tablaCargada  === true ) {
        for (let i = filas.length - 1; i >= 0; i--) {
            tablaUsuarios.removeChild(filas[i]);
          }
        }

    fetch( url )
        .then( response=> response.json()  )
        .then( users => {
            loading.style.display = "none"; // Ocultar el efecto de carga
            users.data.forEach(user => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.avatar}" alt="Avatar de ${user.first_name} ${user.last_name}" class="img-rounded"></td>
                `;
                tablaUsuarios.appendChild(fila);
                // Cambiar el indicador de carga de la tabla a verdadero
                tablaCargada = true;
            });
        } )
        .catch( error => console.log(error) );   
}

