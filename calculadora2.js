let numero1= prompt("Ingrese un numero");
let operacion= prompt("Ingrese operacion que deseas realizar (+,-,* o /)");
let numero2= prompt("Ingrese otro numero");
let resultado

switch (operacion) {
  case "+":
    resultado= parseInt (numero1)+ parseInt(numero2)
    alert("El resultado es: " +resultado);
    break;
  case "-":
    resultado= parseInt (numero1)- parseInt(numero2)
    alert("El resultado es: " +resultado);
    break;
  case "*":
    resultado= parseInt (numero1)* parseInt(numero2)
    alert("El resultado es: " +resultado);
    break;
  case "/":
    resultado= parseInt (numero1)/ parseInt(numero2)
    if (numero2>0){
      alert("El resultado es: " +resultado);
    } else {
    alert("No se puede dividir por 0");
    }
    break;
  default: 
    alert ("Ingrese un valor valido")
    break;
}