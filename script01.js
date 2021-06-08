let numero = prompt("Ingrese un numero");

//Para cambiar a un de string a numero
let num = parseInt(numero);

// Funcion que Realizará el calculo de las tablas de multiplicar
let calcularTablas = (num) => {
  if (num < 1 || num > 20) {
    // Retorno un mensaje!
    console.log("Número fuera del rango");
    return false; // al retornar false se corta el proceso normal de la función
  }

  for (let i = 1; i <= num; i++) {
    let result = i * num;
    console.log(`${i} * ${num} = ${result}`);
  }

  for (let i = 1; i <= num; i++) {
    let res = 1;
    for (let j = 1; j <= i; j++) {
      res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
  }
};

calcularTablas(num);
