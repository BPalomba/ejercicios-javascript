// Peso y altura deben ingresarse
let peso = 65
let altura = 1.72


let imc
imc = peso / (altura^2)

console.log(imc)


if (imc >= 30) {
    console.log("Obeso")
} else if (imc >= 25){
    console.log("Sobrepeso")
} else if (imc >= 18.5) {
    console.log("Normal")
} else {
    console.log("Bajo Peso")
}