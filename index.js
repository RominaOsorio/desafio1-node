const {leer, registrar} = require('./operaciones.js')

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)


if(operacion !== undefined) {
    if(operacion.trim().toLowerCase() === 'registrar') {
        let resultado = registrar(nombre, edad, tipo, color, enfermedad)
        console.log(resultado);
    } else if(operacion.trim().toLowerCase() === 'leer') {
        let resultado = leer()
        console.log(resultado);
    }else{
        console.log('ingrese una opcion valida, LEER o REGISTRAR');
    }
} else {
    console.log('ingrese una opcion valida');
}