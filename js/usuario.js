// operaciones
var operacion1 = "Sumar"
var operacion2 = "Restar"
var operacion3 = "Multiplicar"
var operacion4 = "Dividir"
var operacion5 = "Módulo"
var nombre = prompt("Ingrese su nombre: ")
var numero = prompt('Ingrese un número : ')
var segundo_numero = prompt('Ingrese un segundo número : ')
numero = parseInt(numero)
segundo_numero = parseInt(segundo_numero)
// Mostrar
document.write(`¡Hola ${nombre}, <br>
el resultado de ${operacion1} ${numero} y ${segundo_numero} es ${(numero+segundo_numero)}<br>
el resultado de ${operacion2} ${numero} y ${segundo_numero} es : ${(numero-segundo_numero)}<br>
el resultado de ${operacion3} ${numero} y ${segundo_numero} es : ${(numero*segundo_numero)}<br>
el resultado de ${operacion4} ${numero} y ${segundo_numero} es : ${(numero/segundo_numero)}!<br>
el resultado de ${operacion5} ${numero} y ${segundo_numero} es : ${(numero/segundo_numero)}!<br>`)

//datos de usuario
var nombre = prompt("Ingrese su primer nombre: ")
var apellido = prompt("Ingrese su primer apellido: ")
var edad = prompt("Ingrese su edad: ")
var rut = prompt("Ingrese su rut: ")
document.write(`Nombre: ${nombre}<br>
Apellido: ${apellido}<br>
Edad: ${edad} años<br>
Rut: ${rut}`)


