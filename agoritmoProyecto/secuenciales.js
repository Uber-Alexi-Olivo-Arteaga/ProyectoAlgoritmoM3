let prompt = require('prompt-sync')();

// 1. Pedir al usuario su nombre y saludarlo.
// Análisis:
// Entrada: Pedir que el usuario ingrese su nombre.
// Proseso: Mostrar en consola un saludo junto con el nombre ingresado.
// Salida: Se muestra el saludo con el nombre del usuario
// Algoritmo ejercicio1
//     nombre: se declara como cadena de texto
//     Escribir "Ingrese su nombre: "
//     Leer nombre
//     Escribir "Hola, que tal ", nombre
// FinAlgoritmo
function ejercicio1(){
  let nombre = prompt("Ingrese su nombre: ");

  console.log("Hola, que tal", nombre);
}

// 2. Pedir dos palabras y presentarlas concatenadas
// Análisis:
// Entrada: Pedirle al usuario que ingrese dos palabras.
// Proceso: Se concatenan las dos palabras ingresadas.
// Salida: Mostrar la concatenación de las dos palabras ingresadas por el usuario.
// Algoritmo ejercicio2
//     palabra1, palabra2: se declaran como cadenas de texto
//     Escribir "Ingrese la primera palabra: "
//     Leer palabra1
//     Escribir "Ingrese la segunda palabra: "
//     Leer palabra2
//     Escribir palabra1 + palabra2
// FinAlgoritmo
function ejercicio2(){
  let palabra1 = prompt("Ingrese la primera palabra: ");
  let palabra2 = prompt("Ingrese la segunda palabra: ");

  console.log(palabra1, palabra2);
}

// 3. Solicitar al usuario dos números y mostrar su suma.
// Análisis:
// Entrada: Pedir al usuario que ingrese dos números.
// Proceso: Sumar los dos números ingresados por el usuario.
// Salida: Mostrar la suma de los dos números.
// Algoritmo ejercicio3
//     numero1, numero2: se declaran como enteros
//     Escribir "Ingrese el primer numero: "
//     Leer numero1
//     Escribir "Ingrese el segundo numero: "
//     Leer numero2
//     Escribir numero1 + numero2
// FinAlgoritmo
function ejercicio3(){
  let numero1 = prompt("Ingrese el primer numero: ");
  let numero2 = prompt("Ingrese el segundo numero: ");
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);

  console.log(numero1 + numero2);
}

// 4. Pedir al usuario un número y mostrar su doble.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Calcular el doble del número ingresado por el usuario.
// Salida: Mostrar el resultado del doble del número.
// Algoritmo ejercicio4
//     numero: se declara como entero
//     Escribir "Ingrese un numero: "
//     Leer numero
//     Convertir numero a entero
//     Escribir numero * 2
// FinAlgoritmo
function ejercicio4(){
  let numero = prompt("Ingrese un numero: ");
  numero = parseInt(numero);

  console.log(numero * 2);
}

// 5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Análisis:
// Entrada: Pedirle al usuario que ingrese su edad.
// Proceso: Calcular la edad que tendrá el usuario en el próximo año sumándole 1 a su edad actual.
// Salida: Mostrar un mensaje indicando la edad que tendrá el usuario en el próximo año.
// Algoritmo ejercicio5
//     edad: se declara como entero
//     nuevaEdad: se declara como entero
//     Escribir "Ingrese su edad: "
//     Leer edad
//     Convertir edad a entero
//     nuevaEdad = edad + 1
//     Escribir "En el próximo año tendrás", nuevaEdad, "años."
// FinAlgoritmo
function ejercicio5(){
  let edad = prompt("Ingrese su edad: ");
  edad = parseInt(edad)
  let nuevaEdad = edad + 1;

  console.log("En el proximo año tendras", nuevaEdad, "años");
}

// 6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Análisis:
// Entrada: Pedir al usuario que ingrese dos números.
// Proceso: Calcular el producto de los dos números ingresados por el usuario.
// Salida: Mostrar el resultado del producto de los dos números.
// Algoritmo ejercicio6
//     numero1, numero2, producto: se declaran como enteros
//     Escribir "Ingrese el primer numero: "
//     Leer numero1
//     Escribir "Ingrese el segundo numero: "
//     Leer numero2
//     producto = numero1 * numero2
//     Escribir "El producto resultante de esos dos números es:", producto
// FinAlgoritmo
function ejercicio6(){
  let numero1 = prompt("Ingrese el primer numero: ");
  let numero2 = prompt("Ingrese el segundo numero: ");
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  let producto = 0;

  producto = numero1 * numero2;

  console.log("El prodcuto resultante de esos dos números es:", producto);
}

// 7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Análisis:
// Entrada: Solicitar al usuario que ingrese una temperatura en grados Celsius.
// Proceso: Convertir los grados Celsius a grados Fahrenheit utilizando la fórmula de conversión.
// Salida: Mostrar la temperatura en grados Fahrenheit.
// Algoritmo ejercicio7
//     gradosC, gradosF: se declaran como enteros
//     Escribir "Ingrese los grados Celsius: "
//     Leer gradosC
//     gradosF = (gradosC * 9/5) + 32
//     Escribir "Los grados Fahrenheit son:", gradosF
// FinAlgoritmo
function ejercicio7(){
  let gradosC = prompt("Ingrese los grados Celcius: ");
  gradosC = parseInt(gradosC);

  let gradosF = (gradosC * 9/5) + 32;

  console.log("Los grados Fahrenheit son:", gradosF);
}

// 8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Análisis:
// Entrada: Solicitar al usuario que ingrese su nombre.
// Proceso: Mostrar el nombre del usuario tres veces en la pantalla utilizando un bucle.
// Salida: Mostrar el nombre del usuario tres veces.
// Algoritmo ejercicio8
//     nombre: se declara como cadena de texto
//     contador: se declara como entero e inicializa en 0
//     Escribir "Ingrese su nombre: "
//     Leer nombre
//     Para contador desde 0 hasta 2
//         Escribir nombre
//     FinPara
// FinAlgoritmo
function ejercicio8(){
  let nombre = prompt("Ingrese su nombre: ");
  let contador = 0;

  for (contador = 0; contador < 3; contador++) {
    console.log(nombre);
  }
}

// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Análisis:
// Entrada: Pedir al usuario que ingrese un número.
// Proceso: Mostrar la tabla de multiplicar del número ingresado del 1 al 10.
// Salida: Se muestra cada multiplicación de manera individual.
// Algoritmo ejercicio9
//     numero: se declara como entero
//     Escribir "Ingrese un número: "
//     Leer numero
//     Para i desde 1 hasta 10
//         Escribir numero, "x", i, "=", numero * i
//     FinPara
// FinAlgoritmo
function ejercicio9(){
  let numero = prompt("Ingrese un numero: ");
  numero = parseInt(numero);

  for (let i = 1; i <= 10; i++){
    console.log(numero, "x", i, "=", numero * i);
  }
}

// 10. Pedir al usuario dos números y mostrar el mayor.
// Análisis:
// Entrada: Solicitar al usuario que ingrese dos números.
// Proceso: Comparar los dos números ingresados para determinar cuál es mayor.
// Salida: Mostrar el número mayor entre los dos ingresados por el usuario.
// Algoritmo ejercicio10
//     numero1, numero2: se declaran como enteros
//     Escribir "Ingrese un número: "
//     Leer numero1
//     Escribir "Ingrese otro número: "
//     Leer numero2
//     Si numero1 > numero2 entonces
//         Escribir "El número mayor es:", numero1
//     Sino
//         Escribir "El número mayor es:", numero2
//     FinSi
// FinAlgoritmo
function ejercicio10(){
  let numero1 = prompt("Ingrese un numero: ");
  let numero2 = prompt("Ingrese otro numero: ");
  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);

  if(numero1 > numero2){
    console.log("El número mayor es:", numero1);
  } else{
    console.log("El número mayor es:", numero2);
  }
}

// 11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Análisis:
// Entrada: Pedir al usuario que ingrese una distancia en metros.
// Proceso: Se convierte la distancia ingresada de metros a centímetros multiplicando por 100.
// Salida: Mostrar la distancia en centímetros.
// Algoritmo ejercicio11
//     metros, centimetros: se declaran como enteros
//     Escribir "Ingrese una distancia en metros: "
//     Leer metros
//     centimetros = metros * 100
//     Escribir "La distancia en centímetros es:", centimetros
// FinAlgoritmo
function ejercicio11(){
  let metros = prompt("Ingrese una distancia en metros: ");
  metros = parseInt(metros);

  let centimetros = metros * 100;

  console.log("La distancia en centimetros es:", centimetros);
}

// 12. Pedir 5 números y asignarlos en un arreglo
// Análisis:
// Entrada: Pedir al usuario que ingrese 5 números.
// Proceso: Almacenar los números ingresados por el usuario en un arreglo.
// Salida: Mostrar el arreglo con los números ingresados.
// Algoritmo ejercicio12
//     numeros: se declara como un arreglo de enteros
//     Para i desde 0 hasta 4
//         Escribir "Ingrese un número: "
//         Leer num
//         numeros.agregar(num)
//     FinPara
//     Escribir numeros
// FinAlgoritmo
function ejercicio12(){
  let numeros = [];

  for (let i = 0; i < 5; i++){
    let num = prompt("Ingrese un numero: ");
    num = parseInt(num);

    numeros.push(num);
  }

  console.log(numeros);
}

// 13. Dado un arreglo de 5 nombres presentarlos todos.
// Análisis:
// Entrada: Crear un arreglo con 5 nombres.
// Proceso: Mostrar el arreglo con los nombres almacenados.
// Salida: Se muestra el arreglo de nombres.
// Algoritmo ejercicio13
//     nombres: Crear un arreglo de cadenas de texto e inicializae con los nombres
//     Escribir nombres
// FinAlgoritmo
function ejercicio13(){
  let nombres = ["Agiño", "Sebastian", "Steven", "Angela", "Alexi"];

  console.log(nombres);
}

// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo.
// Análisis:
// Entrada: Crear un arreglo predefinido con 5 elementos.
// Proceso: Buscar el primer elemento, el elemento del medio y el último elemento del arreglo ayudandonos de las propiedades que da js.
// Salida: Mostrar el primer elemento, el elemento del medio y el último elemento del arreglo.
// Algoritmo ejercicio14
//     nombres: Se crea el arreglo de cadenas de texto y se inicializa con los elementos
//     primerElemento: Se crea para almacenar el primer elemento del arreglo
//     medio: Calcular para sacar la mitad del tamaño del arreglo
//     medioElemento: Se crea para almacenar el elemento del medio del arreglo (medio)
//     ultimoElemento: Se crea para almacenar el último elemento del arreglo
//     primerElemento = nombres[0]
//     medioElemento = nombres[medio]
//     ultimoElemento = nombres[longitud del arreglo - 1]
//     Escribir primerElemento
//     Escribir medioElemento
//     Escribir ultimoElemento
// FinAlgoritmo
function ejercicio14(){
  let nombres = ["Agiño", "Sebastian", "Steven", "Angela", "Alexi"];
  let primerElemento = nombres[0];
  let medio = Math.floor(nombres.length / 2);
  let medioElemento = nombres[medio];
  let ultimoElemento = nombres[nombres.length - 1];
  
  console.log(primerElemento);
  console.log(medioElemento);
  console.log(ultimoElemento);
}

// 15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Análisis:
// Entrada: Se crea un arreglo con 5 elementos.
// Proceso: Se intercambian los valores del primer y último elemento del arreglo con la ayuda de una variable auxiliar.
// Salida: Se muestra el arreglo antes y después del intercambio de valores.
// Algoritmo ejercicio15
//     elementos: Se crea como un arreglo de cadenas de texto y se inicializa con los elementos predefinidos
//     Escribir elementos
//     aux: Se inicializa para almacenar temporalmente el primer elemento del arreglo
//     aux = elementos[0]
//     elementos[0] = elementos[longitud del arreglo - 1]
//     elementos[longitud del arreglo - 1] = aux
//     Escribir elementos
// FinAlgoritmo
function ejercicio15(){
  let elementos = ["Agiño", "Sebastian", "Steven", "Angela", "Alexi"];

  console.log(elementos);

  let aux = elementos[0];

  elementos[0] = elementos[elementos.length - 1];
  elementos[elementos.length - 1] = aux;

  console.log(elementos);
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