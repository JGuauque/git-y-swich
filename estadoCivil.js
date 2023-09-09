var nombre;
var estadoCivil;
nombre = prompt("Ingrese el nombre de la persona");
estadoCivil=parseInt(prompt("Ingrese el estado civil de la persona: 1-Soltero \n2-Casado\n3-Separado\n4-Viudo\n5-Union Libe"));
switch (estadoCivil) {
    case 1:
        alert(nombre + " esta solter@")
        break;
    case 2:
        alert(nombre + " esta casad@")
        break;
    case 3:
        alert(nombre + " esta separad@")
       break;
    case 4:
        alert(nombre + " esta viud@")
        break;
    case 5:
        alert(nombre + " esta en union libre")
        break;
    default: 
        alert("estado civil no valido")
        break;
}   