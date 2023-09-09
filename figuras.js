var base,altura,radio,area,figura;
figura=parseInt(prompt("Ingrese la figura a la que dece encontrar su area segun su numero : \n1-cuadrado \n2-triangulo \n3-circulo"));
switch (figura) {
    case 1:
        base =parseFloat(prompt("Ingrese la medida de la base"));
        altura =parseFloat(prompt("inglrese la medida de la altura"));
        area=base*altura;
        alert(" su cuadrado tiene un area de "+area+"cm")
        break;
    case 2:
        altura =parseFloat(prompt("inglrese la medida de la altura"));
        base =parseFloat(prompt("Ingrese la medida de la base"));
        area=(base*altura)/2;
        alert(" su triangulo tiene un area de "+area+"cm")
        break;
    case 3:
        radio=parseFloat(prompt("Ingrese la medida de el radio"));
        area=3.1416*(radio*radio);
        alert("su circulo tiene un area de "+area+"cm")
       break;
    default: 
        alert("la figura ingresada no es valida")
        break;
}   