let prompt = require('prompt-sync')();

// 1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Análisis:
// Entrada: Pedir al usuario que ingresr un número.
// Proceso: Comparar el número ingresado con el valor 10 para determinar si es mayor, menor o igual a 10.
// Salida: Mostrar un mensaje indicando si el número es mayor, menor o igual a 10.
// Algoritmo ejercicio1
//     numero: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer numero
//     Si numero es igual a 10 entonces
//         Escribir "El número es igual a 10."
//     Si numero es mayor que 10 entonces
//         Escribir "El número es mayor a 10."
//     Sino
//         Escribir "El número es menor a 10."
//     FinSi
// FinAlgoritmo
function ejercicio1(){
  let numero = prompt("Ingrese un numero: ");

  if (numero == 10){
    console.log("El número es igual a 10.");
  }
  if (numero > 10 ){
    console.log("El numero", numero, "es mayor a 10.");
  } else {
    console.log("El numero", numero, "es menor a 10.");
  }
}

// 2. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Análisis:
// Entrada: Pedirle al usuario que ingrese su edad.
// Proceso: Se compara la edad ingresada con el valor 18 para determinar si es mayor o menor de edad.
// Salida: Mostrar un mensaje indicando si la persona es mayor o menor de edad.
// Algoritmo determinarMayorOMenorEdad
//     edad: se declara como un número
//     Escribir "Ingrese su edad: "
//     Leer edad
//     Si edad es igual a 18 o edad es mayor que 18 entonces
//         Escribir "Ya es mayor de edad."
//     Sino
//         Escribir "Es menor de edad."
//     FinSi
// FinAlgoritmo
function ejercicio2(){
  let numero = prompt("Ingrese su edad ");

  if (numero == 18 || numero > 18 ){
    console.log("Ya es mayor de edad.");
  } else {
    console.log("Es menor de edad.");
  }
}

// 3. Pedir al usuario un número y mostrar si es par o impar.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Se calcula el residuo de dividir el número ingresado por 2 para determinar si es par o impar.
// Salida: Mostrar un mensaje indicando si el número es par o impar.
// Algoritmo determinarParOImpar
//     numero: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer numero
//     residuo = numero % 2
//     Si residuo es igual a 0 entonces
//         Escribir "El número", numero, "es par."
//     Sino
//         Escribir "El número", numero, "es impar."
//     FinSi
// FinAlgoritmo
function ejercicio3(){
  let numero = prompt("Ingrese un numero:");
  numero = parseInt(numero)
  let resp = numero%2;

  if (resp == 0){
    console.log("El numero", numero, "es par");
  } else {
    console.log("El numero", numero,"es impar");
  }
}

// 4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Se verifica si el número ingresado es mayor o igual a cero para determinar si es positivo o negativo.
// Salida: Mostrar un mensaje indicando si el número es positivo o negativo.
// Algoritmo determinarPositivoONegativo
//     num: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer num
//     Si num es mayor o igual a 0 entonces
//         Escribir "El", num, "es positivo."
//     Sino
//         Escribir "El", num, "es negativo."
//     FinSi
// FinAlgoritmo
function ejercicio4(){
  let num = prompt("Ingrese un numero: ");

  if(num >= 0){
    console.log("El", num, "es positivo");
  } else {
    console.log("El", num, "es negativo" );
  }
}

// 5. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Análisis:
// Entrada: Pedir al usuario que ingrese dos números.
// Proceso: Se compara los dos números ingresados para determinar si son iguales o diferentes.
// Salida: Mostrar un mensaje indicando si los números son iguales o diferentes.
// Algoritmo determinarIgualdad
//     num, num2: se declaran como reales
//     Escribir "Ingrese un número: "
//     Leer num
//     Escribir "Ingrese otro número: "
//     Leer num2
//     Si num es igual a num2 entonces
//         Escribir "Los números son iguales."
//     Sino
//         Escribir "El número", num, "es diferente al número", num2
//     FinSi
// FinAlgoritmo
function ejercicio5(){
  let num = prompt("Ingrese un numero: ");
  let num2 = prompt("Ingrese otro numero: ");

  if(num == num2){
    console.log("Los numeros son iguales.");
  } else {
    console.log("El numero", num, "es diferente al numero", num2);
  }
}

// 6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Análisis:
// Entrada: Pedir al usuario que ingrese un carácter.
// Proceso: Se verifica si el carácter ingresado es una vocal o una consonante.
// Salida: Mostrar un mensaje indicando si el carácter es una vocal o una consonante.
// Algoritmo determinarVocalOConsonante
//     caracter: se declara como un carácter
//     Escribir "Ingrese un carácter: "
//     Leer caracter
//     Si caracter está incluido en "aeiouAEIOU" entonces
//         Escribir caracter, "es una vocal."
//     Sino
//         Escribir caracter, "es una consonante."
//     FinSi
// FinAlgoritmo
function ejercicio6() {
  let caracter = prompt("Ingrese un caracter");
  let esVocal = "aeiouAEIOU".includes(caracter);

  if (esVocal) {
    console.log(caracter + " es una vocal");
  } else {
    console.log(caracter + " es una consonante");
  }
}

// 7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.
// Análisis:
// Entrada: Pedir al usuario que ingrese dos nombres.
// Proceso: Se comparan los dos nombres ingresados para determinar si son iguales o cuál es mayor o menor alfabéticamente.
// Salida: Mostrar un mensaje indicando la relación entre los nombres. Iguales, uno mayor que el otro, o uno menor que el otro.
// Algoritmo compararNombres
//     nombre1, nombre2: se declaran como cadenas de texto
//     Escribir "Ingrese un nombre: "
//     Leer nombre1
//     Escribir "Ingrese otro nombre: "
//     Leer nombre2
//     Si nombre1 es igual a nombre2 entonces
//         Escribir nombre1, "y", nombre2, "son iguales."
//     Sino Si nombre1 es mayor que nombre2 entonces
//         Escribir nombre1, "es mayor que", nombre2
//     Sino
//         Escribir nombre1, "es menor que", nombre2
//     FinSi
// FinAlgoritmo
function ejercicio7() {
  let nombre1 = prompt("Ingrese un nombre: ");
  let nombre2 = prompt("Ingrese otro nombre: ");

  if (nombre1 == nombre2) {
    console.log(nombre1, " y ", nombre2, "son iguales");
  } else if (nombre1 > nombre2) {
    console.log(nombre1, "es mayor que", nombre2);
  } else {
    console.log(nombre1, "es menor que", nombre2);
  }
}

// 8.	Pedir al usuario un número y mostrar si es múltiplo de 3.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Verificar si el número ingresado es múltiplo de 3.
// Salida: Se muestra un mensaje indicando si el número es o no es múltiplo de 3.
// Algoritmo determinarMultiploDe3
//     numero: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer numero
//     residuo = numero % 3
//     Si residuo es igual a 0 entonces
//         Escribir "El número", numero, "es múltiplo de 3."
//     Sino
//         Escribir "El número", numero, "no es múltiplo de 3."
//     FinSi
// FinAlgoritmo
function ejercicio8(){
  let numero = prompt("Ingrese un numero: ");
  numero = parseInt(numero);
  let resp = numero%3;

  if (resp == 0){
    console.log("El numero", numero, "si multiplo de 3");
  } else  {
    console.log("El numero", numero, "no es multiplo de 3");
  }
}

//9.	Solicitar al usuario un número y mostrar si es divisible por 2.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Se verifica si el número ingresado es divisible por 2.
// Salida: Mostrar si el número es o no es divisible por 2.
// Algoritmo determinarDivisiblePor2
//     numero: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer numero
//     residuo = numero % 2
//     Si residuo es igual a 0 entonces
//         Escribir numero, "es divisible por 2."
//     Sino
//         Escribir numero, "no es divisible por 2."
//     FinSi
// FinAlgoritmo
function ejercicio9(){
  let numero = prompt("Ingrese un numero: ");
  numero = parseInt(numero);
  let resp = numero%2;

  if (resp == 0){
    console.log(numero, "si es divisible por 2");
  } else {
    console.log(numero, "no es divisible por 2");
  }
}

// 10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Se compara el número ingresado con el valor 100 para determinar si es mayor, menor o igual a 100.
// Salida: Mostrar un mensaje indicand si el número es mayor, menor o igual a 100.
// Algoritmo compararNumeroCon100
//     numero: se declara como un número
//     Escribir "Ingrese un número: "
//     Leer numero
//     Si numero es igual a 100 entonces
//         Escribir numero, "es igual a 100."
//     Sino Si numero es mayor que 100 entonces
//         Escribir numero, "es mayor a 100."
//     Sino
//         Escribir numero, "es menor a 100."
//     FinSi
// FinAlgoritmo
function ejercicio10(){
  let numero = prompt("Ingrese un número: ");

  if (numero == 100) {
    console.log(numero, "es igual a 100");
  } else if (numero > 100) {
    console.log(numero, "es mayor a 100");
  } else {
    console.log(numero, "es menor a 100");
  }
}

// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Se verifica si el número ingresado tiene una longitud de un solo dígito y si es un número válido.
// Salida: Mostrar un mensaje indicando si el número es de un solo dígito o no lo es.
// Algoritmo verificarUnSoloDigito
//     numero: se declara como una cadena de texto
//     Escribir "Ingrese un número: "
//     Leer numero
//     Si la longitud de numero es igual a 1 y numero es un número válido entonces
//         Escribir numero, "es de un solo dígito."
//     Sino
//         Escribir numero, "no es de un solo dígito."
//     FinSi
// FinAlgoritmo
function ejercicio11(){
  let numero = prompt("Ingrese un número: ");
  
  if (numero.length === 1 && !isNaN(numero)) {
    console.log(numero, "es de un solo dígito");
  } else {
    console.log(numero, "no es de un solo dígito");
  }
}

// 12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado.
// Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Análisis:
// Entrada: Pedir al usuario que ingrese el monto total de una factura y el porcentaje de IVA aplicado.
// Proceso: Se calcula el monto del IVA aplicado al monto total de la factura y luego se suma al monto total para obtener el monto total a pagar.
// Salida: Mostrar el monto total a pagar incluyendo el IVA.
// Algoritmo calcularMontoTotalConIVA
//     montoTotal, porcentajeIVA: se declaran como reales
//     Escribir "Ingrese el valor total de la factura: "
//     Leer montoTotal
//     Escribir "Ingrese el porcentaje de IVA aplicado: "
//     Leer porcentajeIVA
//     montoIVA = montoTotal * (porcentajeIVA / 100)
//     totalPagar = montoTotal + montoIVA
//     Escribir "Total a pagar:", totalPagar
// FinAlgoritmo
function ejercicio12() {
  let monton = parseFloat(prompt("Ingrese el valor total de la factura: "));
  let iva = parseFloat(prompt("Ingrese el porcentaje de IVA aplicado: "));

  let montoIVA = monton * (iva / 100);
  let total = monton + montoIVA;

  console.log("Total a pagar:", total);
}

// 13. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
// Calcular y mostrar el precio final luego de aplicar el descuento.
// Análisis:
// Entrada: Pedir al usuario que ingrese el precio del producto y el porcentaje de descuento aplicado.
// Proceso: Calcular el descuento aplicado al precio del producto y luego se resta este descuento al precio original para obtener el precio final.
// Salida: Se muestra el precio final luego de aplicar el descuento.
// Algoritmo calcularPrecioFinalConDescuento
//     precioProducto, porcentajeDescuento: se declaran como reales
//     Escribir "Ingrese el valor del producto: "
//     Leer precioProducto
//     Escribir "Ingrese el porcentaje de descuento aplicado: "
//     Leer porcentajeDescuento
//     descuentoAplicado = precioProducto * (porcentajeDescuento / 100)
//     precioFinal = precioProducto - descuentoAplicado
//     Escribir "El precio final con descuento es:", precioFinal
// FinAlgoritmo
function ejercicio13(){
  let precio = prompt("ingrese el valor del producto:");
  let descuento = prompt("ingrese el valor del descuento:");
  precio = parseFloat(precio);
  descuento = parseFloat(descuento);

  descuentoAplicado = precio * (descuento / 100);
  precioFinal = precio - descuentoAplicado;

  console.log("El precio final con descuento es: ", precioFinal);
}

// 14. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Análisis:
// Entrada: Pedir al usuario que ingrese su nota en un examen.
// Proceso: Se verifica si la nota ingresada es mayor o igual a 60 para determinar si ha aprobado o reprobado.
// Salida: Mostrar el mensaje indicando si el usuario ha aprobado o reprobado el examen, junto con su nota.
// Algoritmo determinarAprobacion
//     notaExamen: se declara como un real
//     Escribir "Ingrese su calificación: "
//     Leer notaExamen
//     Si notaExamen es mayor o igual a 60 entonces
//         Escribir "Aprobado con:", notaExamen
//     Sino
//         Escribir "Reprobó con:", notaExamen
//     FinSi
// FinAlgoritmo
function ejercicio14(){
  let nota = prompt("Ingrese su calificacion: ");
  nota = parseFloat(nota);

  if (nota >= 60){
    console.log("Aprovado con:", nota);
  } else {
    console.log("Reprobó con:", nota);
  }
}

// 15. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
// Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Análisis:
// Entrada: Pedir al usuario que ingrese el precio de venta del vehículo y su año de fabricación.
// Proceso: Se verifica si el año de fabricación es anterior a 2010. Si lo es, se aplica un descuento del 10% sobre el precio de venta. 
// Salida: Mostrar el precio final del vehículo, con o sin descuento, dependiendo del año de fabricación.
// Algoritmo calcularPrecioFinalVehiculo
//     precioVenta, añoFabricacion: se declaran como reales
//     Escribir "Ingrese el precio de venta del vehículo: "
//     Leer precioVenta
//     Escribir "Ingrese el año de fabricación del vehículo: "
//     Leer añoFabricacion
//     Si añoFabricacion es menor que 2010 entonces
//         descuento = precioVenta * 0.10
//         precioFinal = precioVenta - descuento
//         Escribir "El precio final con descuento es: $", precioFinal
//     Sino
//         Escribir "El precio final sin descuento es: $", precioVenta
//     FinSi
// FinAlgoritmo
function ejercicio15(){
  let precioVenta = prompt("Ingrese el precio de venta del vehículo: ");
  let fechaFabricacion = prompt("Ingrese el año de fabricación del vehículo: ");
  precioVenta = parseFloat(precioVenta);
  fechaFabricacion = parseInt(fechaFabricacion);

  if (fechaFabricacion < 2010) {
    let descuento = precioVenta * 0.10;
    let precioFinal = precioVenta - descuento;
    console.log("El precio final con descuento es: $" , precioFinal.toFixed(2));
  } else {
    console.log("El precio final sin descuento es: $" , precioVenta.toFixed(2));
  }
}

//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
//Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Análisis:
// Entrada: Pedir al usuario que ingrese su sueldo mensual.
// Proceso: Calcular el sueldo anual multiplicando el sueldo mensual por 12. Si el sueldo anual supera los $30,000, se calcula el impuesto del 15% sobre el excedente y se resta del sueldo anual para obtener el sueldo neto anual. Se muestra el sueldo mensual, el sueldo anual, el impuesto aplicado (si corresponde) y el sueldo neto anual.
// Salida: Mostrar el sueldo mensual, el sueldo anual, el impuesto aplicado y el sueldo neto anual.
// Algoritmo calcularSueldoNetoAnual
//     sueldoMensual, sueldoAnual, impuesto, sueldoNetoAnual: se declaran como reales
//     Escribir "Ingrese su sueldo mensual: "
//     Leer sueldoMensual
//     sueldoAnual = sueldoMensual * 12
//     Si sueldoAnual es mayor que 30000 entonces
//         excedente = sueldoAnual - 30000
//         impuesto = excedente * 0.15
//         sueldoNetoAnual = sueldoAnual - impuesto
//     Sino
//         sueldoNetoAnual = sueldoAnual
//     FinSi
//     Escribir "El sueldo mensual es de:", sueldoMensual.toFixed(2)
//     Escribir "El sueldo anual es de:", sueldoAnual.toFixed(2)
//     Si impuesto es mayor que 0 entonces
//         Escribir "Se aplicó un impuesto de:", impuesto.toFixed(2)
//     Sino
//         Escribir "No se aplicó impuesto."
//     FinSi
//     Escribir "El sueldo neto anual es de:", sueldoNetoAnual.toFixed(2)
// FinAlgoritmo
function ejercicio16() {
  let sueldo = prompt("Ingrese su sueldo mensual:");
  sueldo = parseFloat(sueldo);

  let sueldoAnual = sueldo * 12;
  let impuesto = 0;
  let sueldoNetoAnual = 0;

  if (sueldoAnual > 30000) {
    let excedente = sueldoAnual - 30000;
    impuesto = excedente * 0.15;
    sueldoNetoAnual = sueldoAnual - impuesto;
  } else {
    sueldoNetoAnual = sueldoAnual;
  }

  console.log("El sueldo mensual es de:", sueldo.toFixed(2));
  console.log("El sueldo anual es de:", sueldoAnual.toFixed(2));
  
  if (impuesto > 0) {
    console.log("Se aplicó un impuesto de:", impuesto.toFixed(2));
  } else {
    console.log("No se aplicó impuesto.");
  }

  console.log("El sueldo neto anual es de:", sueldoNetoAnual.toFixed(2));
}

// 17. La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. 
// Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.Realice un algoritmo para determinar la ganancia obtenida.
// Análisis:
// Entrada: Pedir al usuario que ingrese el tipo de banano A o B y el tamaño del banano 1 o 2.
// Proceso: Se determina el precio inicial del banano según su tipo y tamaño, aplicando los ajustes que correspondan.
// Salida: Mostrar la ganancia obtenida por el productor por el banano entregado en el embarque.
// Algoritmo calcularGananciaBanano
//     tipoBanano, tamañoBanano: se declaran como cadenas de texto
//     precioInicial = 10: se declara como real
//     Escribir "Ingrese el tipo de banano (A o B): "
//     Leer tipoBanano
//     Escribir "Ingrese el tamaño del banano (1 o 2): "
//     Leer tamañoBanano
//     Si tipoBanano no es igual a 'A' y tipoBanano no es igual a 'B' entonces
//         Escribir "Tipo de banano inválido."
//         Detener algoritmo
//     FinSi
//     Si tamañoBanano no es igual a 1 y tamañoBanano no es igual a 2 entonces
//         Escribir "Tamaño de banano inválido."
//         Detener algoritmo
//     FinSi
//     Si tipoBanano es igual a 'A' entonces
//         Si tamañoBanano es igual a 1 entonces
//             precioInicial = precioInicial + 2
//         Sino
//             precioInicial = precioInicial + 3
//         FinSi
//     Sino si tipoBanano es igual a 'B' entonces
//         Si tamañoBanano es igual a 1 entonces
//             precioInicial = precioInicial - 3
//         Sino
//             precioInicial = precioInicial - 5
//         FinSi
//     FinSi
//     Escribir "La ganancia obtenida por el productor es: $", precioInicial.toFixed(2) - para redondear a 2 decimales
// FinAlgoritmo
function ejercicio17() {
  let tipoBanano = prompt("Ingrese el tipo de banano (A o B): ");
  let tamañoBanano = parseInt(prompt("Ingrese el tamaño del banano (1 o 2): "));
  let precioInicial = 10;

  if (tipoBanano !== 'A' && tipoBanano !== 'B') {
    console.log("Tipo de banano inválido.");
    return;
  }

  if (tamañoBanano !== 1 && tamañoBanano !== 2) {
    console.log("Tamaño de banano inválido.");
    return;
  }

  if (tipoBanano === 'A') {
    if (tamañoBanano == 1) {
      precioInicial = precioInicial + 2;
    } else {
      precioInicial = precioInicial + 3;
    }
  } else if (tipoBanano == 'B') {
    if (tamañoBanano == 1) {
      precioInicial = precioInicial - 3;
    } else {
      precioInicial = precioInicial - 5;
    }
  }

  console.log("La ganancia obtenida por el productor es: $", precioInicial.toFixed(2));
}

// 18. “Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00. 
// Para más de 200 personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva.
// Análisis:
// Entrada: Pedir al usuario que ingrese el número de personas para el evento.
// Proceso: Se determina el costo por persona según la cantidad de personas. Si hay menos o igual a 100 personas, el costo por persona es de $20.00. Si hay más de 100 pero menos o igual a 200 personas, el costo por persona es de $15.00. Para más de 200 personas, el costo por persona es de $10.00. Luego se calcula el costo total multiplicando el costo por persona por el número de personas, se calcula el 15% de IVA sobre el costo total y se suma al costo total para obtener el presupuesto total.
// Salida: Mostrar el presupuesto total para el evento.
// Algoritmo calcularPresupuestoEvento
//     numeroPersonas: se declara como entero
//     costoPorPersona, costoTotal, iva, presupuestoTotal: se declaran como reales
//     Escribir "Ingrese el número de personas: "
//     Leer numeroPersonas
//     Si numeroPersonas es menor o igual a 100 entonces
//         costoPorPersona = 20
//     Sino si numeroPersonas es mayor que 100 y numeroPersonas es menor o igual a 200 entonces
//         costoPorPersona = 15
//     Sino
//         costoPorPersona = 10
//     FinSi
//     costoTotal = numeroPersonas * costoPorPersona
//     iva = costoTotal * 0.15
//     presupuestoTotal = costoTotal + iva
//     Escribir "El presupuesto total para el evento es: $", presupuestoTotal.toFixed(2)
// FinAlgoritmo
function ejercicio18() {
  let numeroPersonas = prompt("Ingrese el número de personas:");

  let costoPorPersona;

  if (numeroPersonas <= 100) {
    costoPorPersona = 20;
  } else if (numeroPersonas > 100 && numeroPersonas <= 200) {
    costoPorPersona = 15;
  } else {
    costoPorPersona = 10;
  }

  let costoTotal = numeroPersonas * costoPorPersona;
  let iva = costoTotal * 0.15;
  let presupuestoTotal = costoTotal + iva;

  console.log("El presupuesto total para el evento es: $" + presupuestoTotal.toFixed(2));
}


// 19. Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// Análisis:
// Entrada: Crear un arreglo de 5 elementos.
// Proceso: Se compara el primer elemento del arreglo con el último elemento para determinar si el primero es mayor que el último.
// Salida: Mostrar si el primer elemento es mayor que el último elemento del arreglo.
// Algoritmo compararElementosArreglo
//     arreglo: Se crea un arreglo de números con 5 elementos
//     Si el primer elemento del arreglo es mayor que el último elemento entonces
//         Escribir "El primer elemento es mayor que el último elemento."
//     Sino
//         Escribir "El primer elemento no es mayor que el último elemento."
//     FinSi
// FinAlgoritmo
function ejercicio19(){
  let arreglo = [5, 10, 15, 20, 25];

  if (arreglo[0] > arreglo[4]) {        
    console.log("El primer elemento es mayor que el último elemento.");
  } else {
    console.log("El primer elemento no es mayor que el último elemento.");
  }
}


// 20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// Análisis:
// Entrada: Crear un arreglo de 5 elementos.
// Proceso: Obtener el residuo de la división del primer elemento entre 2 para determinar si es par, y se obtiene el residuo de la división del último elemento entre 2 para determinar si es impar.
// Salida: Se indica si el primer elemento es par y si el último elemento es impar.
// Algoritmo verificarParImpar
//     arreglo: Se crea un arreglo de números con 5 elementos
//     a: Crear una variable e inicializarla con el residuo de la división del primer elemento del arreglo entre 2
//     b: Crear una variable e inicializarla con el residuo de la división del último elemento del arreglo entre 2
//     Si a es igual a 0 entonces
//         Escribir "El primer elemento es par"
//     Sino
//         Escribir "El primer elemento no es par"
//     FinSi
//     Si b es igual a 0 entonces
//         Escribir "El último elemento es impar"
//     Sino
//         Escribir "El último elemento no es impar"
//     FinSi
// FinAlgoritmo
function ejercicio20(){
  let arreglo = [2, 4, 6, 8, 69];
  let a = arreglo[0] % 2;
  let b = arreglo[4] % 2;

  if (a  == 0 ) {        
    console.log("El primer elemento es par");
  } else {
    console.log("El primer elemento no es par");
  }
  if (b  == 0 ) {        
    console.log("El ultimo elemento no es impar");
  } else {
    console.log("El ultimo elemento  es impar");
  }
}

//21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Análisis:
// Entrada: Se crea un arreglo de 3 elementos.
// Proceso: Se compara cada elemento del arreglo con una variable que almacena el mayor valor encontrado hasta el momento. Se actualiza esta variable si se encuentra un elemento mayor.
// Salida: Mostrar el elemento mayor del arreglo.
// Algoritmo encontrarMayor
//     arreglo: Se crea un arreglo de números con 3 elementos
//     mayor: se declara como un real y se inicializa en 0
//     Si el primer elemento del arreglo es mayor que la variable "mayor" entonces
//         mayor = el primer elemento del arreglo
//     Sino si el segundo elemento del arreglo es mayor que la variable "mayor" entonces
//         mayor = el segundo elemento del arreglo
//     Sino
//         mayor = el tercer elemento del arreglo
//     FinSi
//     Escribir "El mayor es:", mayor
// FinAlgoritmo
function ejercicio21(){
  let arreglo = [12,3,8];
  let mayor = 0;

  if (arreglo[0] > mayor){
    mayor = arreglo[0];
  } else if (arreglo[1] > mayor){
    mayor = arreglo [1];
  } else {
    mayor = arreglo[2];
  }

  console.log("el mayor es: ", mayor);
}


// 22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos.
// Análisis:
// Entrada: Se crea un arreglo de 5 elementos.
// Proceso: Se suman todos los elementos del arreglo.
// Salida: Mostrar la suma de los elementos del arreglo.
// Algoritmo sumarElementosArreglo
//     arreglo: Se crea un arreglo de números con 5 elementos
//     suma: se declara como real y se inicializa en 0
//     La suma se calcula sumando todos los elementos del arreglo
//     Escribir "El arreglo es:", arreglo
//     Escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo
function ejercicio22(){
  let arreglo = [10,20,30,40,50];
  let suma = 0;

  suma = arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4];

  console.log(arreglo);
  console.log(suma);
}


// ejercicio1();
// ejercicio2();
// ejercicio3();
// ejercicio4();
// ejercicio5();
// ejercicio6();
// ejercicio7();
// ejercicio8();
// ejercicio9();
// ejercicio10();
// ejercicio11();
// ejercicio12();
// ejercicio13();
// ejercicio14();
// ejercicio15();
// ejercicio16();
// ejercicio17();
// ejercicio18();
// ejercicio19();
// ejercicio20();
// ejercicio21();
ejercicio22();