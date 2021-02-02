// METODOS DE ARRAY

// son metodos que reciben como parametro una funcion
// y esa funcion se la va a aplicar a todos los miembreos del array
// casi todos reciben como parametros en esa funcion cada uno de los elmentos, el indice , y el array
// retorna un array nuevo, cuyos elementos son lo que retorna la funcion-parametro

// METODO MAP ==>

// const edades = [23, 24, 6, 8, 42, 23];

// const nuevoArray = edades.map(() => {
//   console.log(edad);
//   return edad + 10;
// });

// console.log(nuevoArray);

// METODO FIND ==>

// RETORNA EL PRIMER ELEMENTO QUE CUMPLA UNA CONDICION
// LA CONDICION DEBE SER *RETORNADA* EN LA FUNCION PARAMETRO
// SI NO HAY NINGUNA QUE CUMPLA LA CONDICION, RETORNA UNDEFINED

// valores falsy ==>  null, "" , 0 , NaN, undefined, false

// const edades = [23, 24, 6, 8, 42, 23];
// const nombres = ["maca", "sol", "caro", "rosy", "flor"];

// const mayorA18 = edades.find((edad) => {
//   return edad > 18;
// });

// const empiezaConF = nombres.find((nombre) => {
//   return nombre[0] === "f";
// });

// console.log(mayorA18); // 23
// console.log(empiezaConF); // flor (que es el nombre que empieza con "f")

// METODO FILTER ==>

// RETORNA TODOS LOS ELEMENTOS QUE CUMPLAN UNA CONDICION (EN FORMA DE ARRAY)
// LA CONDICION DEBE SER *RETORNADA* EN LA FUNCION PARAMETRO
// SI NO HAY NINGUNA QUE CUMPLA LA CONDICION, RETORNA UN ARRAY VACIO

const edades = [23, 24, 6, 8, 42, 23];
const nombres = ["maca", "sol", "caro", "rosy", "flor"];

const mayorA18 = edades.filter((edad) => {
  return edad > 18;
});

console.log(mayorA18); // [23,24,42,23]

// EJERCICIO FILTER ⭐⭐⭐==>

// EJERCICIO 1 😀

// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado

const costos = [
  39,
  53,
  17,
  99,
  7,
  9,
  6,
  68,
  54,
  97,
  27,
  90,
  92,
  75,
  26,
  86,
  22,
  42,
  20,
  14,
];

// codear acá la solución del ejercicio

const losMasCaros = costos.filter((costo) => {
  return costo >= 50;
});

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

// EJERCICIO 2 😀

// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares

const masNumeros = [
  43,
  11,
  18,
  46,
  44,
  37,
  42,
  29,
  9,
  3,
  37,
  0,
  40,
  10,
  38,
  34,
  25,
  40,
  4,
  32,
];

// codea acá tu solución
const numerosPares = masNumeros.filter((pares) => {
  return pares % 2 === 0;
});
const numerosImpares = masNumeros.filter((impares) => {
  return impares % 2 !== 0;
});

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

// METODO EVERY ==> TODOS

// recibe una funcion como parametro
// lo que retorne esa funcion es una condicion que se le aplicara a todos los miembros del array
// si la respuesta para todos es true, devuelve true. si a lo contrario la respuesta el false, devuelve false.
// Retorna un booleano al igual que SOME

const nombress = ["maca", "sol", "caro", "rosy", "flor"];
const todosIguales = ["maca", "maca", "maca", "maca"];

const sonIguales = todosIguales.every((nombre) => {
  return nombre === "maca";
}); // true , si hay algun elemento que no cumple retorna false

console.log(sonIguales);

const tieneMenosDeSeisLetras = nombres.every((nombre) => {
  return nombre.length < 3;
}); // false

console.log("EJEMPLO CON EVERY: ", tieneMenosDeSeisLetras);

// METODO SOME ==> ALGUNO

const nombresss = ["maca", "sol", "caro", "rosy", "flor"];

const hayAlgunoDeTresLetras = nombresss.some((nombre) => {
  return nombre.length === 4;
});

console.log("EJEMPLO CON SOME: ", hayAlgunoDeTresLetras);

// pagina para probar metodos ==> https://arrayexplorer.netlify.app/

//🚧🚧🚧🚧 ARRAY DE OBJETOS 🚧🚧🚧 ===>

const alumnas = [
  {
    nombre: "maca",
    edad: 22,
  },
  {
    nombre: "marian",
    edad: 27,
  },
  {
    nombre: "rosy",
    edad: 25,
  },
  {
    nombre: "caro",
    edad: 28,
  },
  {
    nombre: "dani",
    edad: 24,
  },
];

console.log(alumnas); // me devuelve todos los objetos del array

console.log(alumnas[0]); // me devuelve el primer objeto del array ==> {nombre: "maca", edad: 22}

console.log(alumnas[0].nombre); // me devuelve el string "maca"

// nombre del array + nombre de la propiedad de ese objeto
//    alumnas [0] . nombre

const alumnasSinEdad = alumnas.map((alumna) => {
  delete alumna.edad;
  return alumna;
});

console.log(alumnasSinEdad);

const alumnasMasViejas = alumnas.map((alumna) => {
  alumna.edad = alumna.edad + 1;
  return alumna;
});

console.log(alumnasMasViejas);

// EJERCICIO EXTRA:

// a) Crear un array nuevo con todas las alumnas que tengan menos de 25 años
// b) Guardar en una variable a la primera alumna cuyo nombre tenga mas de 4 letras
// c) Crear un booleano que diga si todas las alumnas tienen mas de 18 años
// d) Crear un booleano que diga si al menos una alumna tiene mas de 30 años

const alumnas1 = [
  {
    nombre: "maca",
    edad: 22,
  },
  {
    nombre: "marian",
    edad: 27,
  },
  {
    nombre: "rosy",
    edad: 25,
  },
  {
    nombre: "caro",
    edad: 28,
  },
  {
    nombre: "dani",
    edad: 4,
  },
];

// a)
const alumnasMenosDe25 = alumnas1.filter((alumna) => {
  //   alumna.edad = alumna.edad < 25; ==> me da true o false solamente pero con todo el array
  return alumna.edad < 25;
});
console.log(alumnasMenosDe25);

// b)
const alumnaNombreMasDe4Letras = alumnas1.filter((alumna) => {
  return alumna.nombre.length > 4;
});
console.log(alumnaNombreMasDe4Letras);

// c)
const alumnasMasDe18 = alumnas1.every((alumna) => {
  return alumna.edad > 18; //==> me da true o false solamente pero con todo el array
});
console.log(alumnasMasDe18);

// d)
const alumnaTieneMasDe30 = alumnas1.some((alumna) => {
  return alumna.edad > 30;
});
console.log(alumnaTieneMasDe30);
