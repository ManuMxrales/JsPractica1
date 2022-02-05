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

const btn_clear2 = document.getElementById("btn_clear2");
const btn_tri = document.getElementById("btn_tri");
let result2 = document.getElementById('result-triangulo');

const triPerimetro = (lado, lado2, base) => lado +lado2 + base;
const triArea = (base, altura) => (base * altura) / 2;

btn_tri.addEventListener("click", function apTri(){
    const lado = document.getElementById("InputTriangulo");
    const lado2 = document.getElementById("InputTriangulo2");
    const base = document.getElementById("InputTriangulo3");

    let data = triPerimetro(parseFloat(lado.value), parseFloat(lado2.value), parseFloat(base.value))
    let data2 = triArea(parseFloat(lado.value), parseFloat(base.value))
    result2.innerHTML = `El perimetro es: ${data.toFixed(2)} cm
    El Area es: ${data2.toFixed(2)} cm^2`;

    
    

});

btn_clear2.addEventListener("click", function clear_btn(){
    result2.innerHTML = "";
});

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