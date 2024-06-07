//valores a ingresar a,b,c // no poner ni a ni b = 0

let a = 1
let b = 4
let c = 6

a = b + c
b = a * c
c = a / b

console.log(a,b,c)

console.log(1/0)
console.log(0/1)

if (a > b && a > c) {
    console.log("a es el mas grande")
} else

if (b > a && b > c) {
    console.log("b es el mas grande")
} else

if (c > a && c > b ) {
    console.log("c es el mas grande")
} else console.log("son iguales")
