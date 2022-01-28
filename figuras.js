//Codigo para Cuadrado
//console.group nos ayuda a agrupar los console.log
//Termina con console.groupEnd();
console.group("Cuadrados");
const btn_squre_p = document.getElementById('btn_squre_p');
const btn_clear = document.getElementById('btn_clear');

const sqrPerimetro = (lado) => lado * 4;
const sqrArea = (lado) => Math.pow(lado, 2);

let result = document.getElementById('result-cuadrado');

btn_squre_p.addEventListener("click", function perimetroCuadrado(){
    const lado = document.getElementById("InputCuadrado");
    let data = sqrPerimetro(parseFloat(lado.value));
    let data2 = sqrArea(parseFloat(lado.value));

    result.innerHTML =  `El Perimetro es: ${data.toFixed(2)} cm
    El area es: ${data2.toFixed(2)} cm^2`;
});
btn_clear.addEventListener("click", function clear_btn(){
    result.innerHTML = "";
})

console.groupEnd();

//Codigo para Triangulo
//--------------------------------------------------------
console.group("Triangulos");

/*
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
*/
console.groupEnd();

//Codigo para Circulo
//-------------------------------------------------------
console.group("Circulos");

const btn_cir = document.getElementById("btn_cir");
const btn_clear3 = document.getElementById("btn_clear3");
const PI = Math.PI;

let cirDiametro = (radio) => radio * 2;

const cirPerimetro = (radio) => {
    let diametro = cirDiametro(radio)
    return diametro * PI;
}
const cirArea = (radio) => Math.pow(radio, 2) * PI;

let result3 = document.getElementById('result-circulo');

btn_cir.addEventListener("click", function apCir(){
    const ladoCir = document.getElementById("InputCirculo");
    let dataCir = cirPerimetro(parseFloat(ladoCir.value));
    let dataCir2 = cirArea(parseFloat(ladoCir.value));
    result3.innerHTML = `El Perimetro es: ${dataCir.toFixed(2)} cm
    El Area es: ${dataCir2.toFixed(2)}`;
});

btn_clear3.addEventListener("click", function clear_btn(){
    result3.innerHTML = "";
});

console.groupEnd();