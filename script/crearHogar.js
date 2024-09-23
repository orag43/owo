function mostrarCampos() {
    // Obtenemos el valor seleccionado del select
    const tipoHogar = document.getElementById('tipoHogar').value;

    // Ocultamos ambos campos al iniciar
    document.querySelector('.opcionCasa').style.display = 'none';
    document.querySelector('.opcionDepartamento').style.display = 'none';

    // Dependiendo de la selección, mostramos el campo correspondiente
    if (tipoHogar === 'casa') {
        document.querySelector('.opcionCasa').style.display = 'block';
    } else if (tipoHogar === 'departamento') {
        document.querySelector('.opcionDepartamento').style.display = 'block';
    }
}
function cambiarValor(incremento) {
    const inputTorres = document.getElementById('cantidadTorres');
    let valorActual = parseInt(inputTorres.value);

    // Verificar si el valor es un número
    if (isNaN(valorActual)) {
        valorActual = 0;
    }

    // Actualizar el valor, asegurando que no baje de 0
    valorActual = Math.max(0, valorActual + incremento);
    inputTorres.value = valorActual;

    // Llamar a la función para generar campos
    generarCamposPisos();
}
function generarCamposPisos() {
    const cantidadTorres = document.getElementById('cantidadTorres').value;
    const contenedorPisos = document.getElementById('camposPisos');
    
    // Limpiar los inputs anteriores
    contenedorPisos.innerHTML = '';

    if (cantidadTorres > 0) {
        // Mostrar el contenedor de los inputs
        document.querySelector('.contenedorPiso').style.display = 'block';
        
        // Crear los inputs para la cantidad de pisos por cada torre
        for (let i = 1; i <= cantidadTorres; i++) {
            const div = document.createElement('div');
            div.innerHTML = `<label for="pisosTorre${i}">Torre ${i} - Cantidad de pisos:</label> 
                             <input type="number" id="pisosTorre${i}" placeholder="Ej: 10">`;
            contenedorPisos.appendChild(div);
        }
    } else {
        // Si el valor de cantidadTorres es 0 o vacío, oculta los inputs
        document.querySelector('.contenedorPiso').style.display = 'none';
    }
}
