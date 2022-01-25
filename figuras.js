//Codigo para Cuadrado
//console.group nos ayuda a agrupar los console.log
//Termina con console.groupEnd();
console.group("Cuadrados");
//const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
//console.log(areaCuadrado);
// TO DO hacer una funcion que reciba el valo y return perimetro y area
console.groupEnd();

//Codigo para Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.log(areaTriangulo + " Area de Trangulo");
console.groupEnd();

//Codigo para Circulo
console.group("Circulos");
//const radioCirculo = 4;
function diametroCirculo(radio){
    return radio * 2;
}
//const diametroCirculo = radio * 2;
const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log(areaCirculo + " Area de Circulo");
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}