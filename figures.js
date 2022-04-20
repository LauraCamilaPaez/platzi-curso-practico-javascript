//Código del cuadrado

console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es:  " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado + "cm^2";
}
// console.log("El área del cuadrado es:  " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del Triangulo

console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


// console.log("Los lados del Triangulo miden " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del Triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del Triángulo es:  " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
// console.log("El área del Triangulo es:  " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del Triangulo

console.group("Círculos");

// Radio
// const radioCirculo = 4
// console.log("El radio del circulo es " + radioCirculo + "cm");
// Diametro
function diametroCirculo (radio){
    return radio * 2;
}
// console.log("El diámetro del circulo es " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
console.log("PI es " + PI);
// Circunferencia

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es " + perimetroCirculo + "cm");
// Area 
function areaCirculo (radio){
    return PI * (radio * radio);
}
// console.log("El área del circulo es " + areaCirculo + "cm^2");
console.groupEnd();

// Aquí interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);
    
    const area = areaCuadrado(value);
    alert (area);
}
//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("inputTriangulo3");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const value1 = Number(base.value);
    const altura = document.getElementById("alturaTriangulo");
    const value2 = Number(altura.value);

    const area = areaTriangulo(value1,value2);
    alert (area);
}

//Círculo

function calcularDiametroCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value1 = Number(radio.value);
    
    const diametro = diametroCirculo(value1);
    alert (diametro);
}

function calcularPerimetroCirculo(){
    const diametro = document.getElementById("diametroCirculo");
    const value1 = Number(diametro.value);

    const perimetro = perimetroCirculo(value1);
    alert (perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("areaCirculo");
    const value1 = Number(radio.value);

    const area = areaCirculo(value1);
    alert (area);
}