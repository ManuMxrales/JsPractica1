//Codigo para Cuadrado
//console.group nos ayuda a agrupar los console.log
//Termina con console.groupEnd();
console.group("Cuadrados");
const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log(areaCuadrado);

console.groupEnd();
//Codigo para Triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
